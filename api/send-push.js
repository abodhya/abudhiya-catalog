const https = require("https");

function postJson(urlStr, headers, bodyObj) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(bodyObj), "utf8");
    const u = new URL(urlStr);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: "POST",
        headers: Object.assign(
          {
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": data.length,
          },
          headers
        ),
        timeout: 15000,
      },
      (resp) => {
        let chunks = "";
        resp.on("data", (d) => (chunks += d));
        resp.on("end", () => {
          let parsed = {};
          try {
            parsed = JSON.parse(chunks || "{}");
          } catch (e) {
            parsed = { raw: chunks };
          }
          resolve({ status: resp.statusCode || 500, data: parsed });
        });
      }
    );
    req.on("timeout", () => req.destroy(new Error("Upstream timeout")));
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method === "GET") {
    res.statusCode = 200;
    return res.end(JSON.stringify({ ok: true, service: "abudhiya-push-proxy", version: 3 }));
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    if (!body || typeof body !== "object") body = {};

    const appId = String(body.app_id || "").trim();
    const restKey = String(body.rest_key || "").trim();
    const title = String(body.title || "🔥 عروض جديدة من ابوسيف للتجارة").trim();
    const msg = String(body.body || "افتح المتجر الآن وتصفح أحدث العروض.").trim();
    const url = String(body.url || "https://abudhiya-catalog.vercel.app/").trim();
    const image = String(body.image || "").trim();

    if (!appId || !restKey) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ ok: false, error: "Missing app_id or rest_key" }));
    }

    const authHeaders = [];
    if (/^(Key|Basic)\s+/i.test(restKey)) {
      authHeaders.push(restKey);
    } else if (restKey.startsWith("os_v2_")) {
      authHeaders.push("Key " + restKey);
    } else {
      authHeaders.push("Key " + restKey);
      authHeaders.push("Basic " + restKey);
    }

    const segments = ["Total Subscriptions", "Subscribed Users", "All"];
    let lastResult = null;
    let sawNoSubs = false;
    let lastNoSubsSeg = "";

    for (let a = 0; a < authHeaders.length; a++) {
      for (let s = 0; s < segments.length; s++) {
        const payload = {
          app_id: appId,
          target_channel: "push",
          included_segments: [segments[s]],
          headings: { ar: title, en: title },
          contents: { ar: msg, en: msg },
          url: url,
        };
        if (image && /^https?:\/\//i.test(image)) {
          payload.chrome_web_image = image;
        }

        const r = await postJson(
          "https://api.onesignal.com/notifications",
          { Authorization: authHeaders[a] },
          payload
        );
        lastResult = r;

        if (r.status >= 200 && r.status < 300 && r.data && !r.data.errors) {
          const notifId = String(r.data.id || "").trim();
          const hasRcp = typeof r.data.recipients === "number";
          if (!notifId && (!hasRcp || r.data.recipients === 0)) {
            sawNoSubs = true;
            lastNoSubsSeg = segments[s];
            continue;
          }
          res.statusCode = 200;
          return res.end(
            JSON.stringify({
              ok: true,
              delivered: true,
              id: notifId,
              recipients: hasRcp ? r.data.recipients : null,
              segment: segments[s],
            })
          );
        }

        const errText = JSON.stringify((r.data && r.data.errors) || r.data || "");
        if (r.status === 401 || r.status === 403 || /invalid.*key|unauthorized|access denied/i.test(errText)) {
          break;
        }
        if (/not subscribed|no subscribed/i.test(errText)) {
          sawNoSubs = true;
          lastNoSubsSeg = segments[s];
          continue;
        }
      }
    }

    if (sawNoSubs) {
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          ok: true,
          delivered: false,
          id: "",
          recipients: 0,
          note: "no_subscribers_yet",
          segment: lastNoSubsSeg,
        })
      );
    }

    res.statusCode = (lastResult && lastResult.status) || 502;
    return res.end(
      JSON.stringify({
        ok: false,
        status: res.statusCode,
        error: (lastResult && lastResult.data && lastResult.data.errors) || (lastResult && lastResult.data) || "OneSignal request failed",
      })
    );
  } catch (err) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ ok: false, error: String(err && err.message ? err.message : err) }));
  }
};
