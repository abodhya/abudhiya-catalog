/* Abudhiya / Abu Saif Clean Offline PWA Engine v4 */
const CACHE_NAME = "abudhiya-offline-v4-777822";
const CORE_URLS = ["/", "/apple-touch-icon.png", "/favicon.png", "/icon-192.png", "/icon-512.png", "/index.html", "/manifest-v1795777799.json", "/manifest.json", "/new_arrivals.json", "/wholesale.html", "/store/index.html", "/api/order.js", "/push/onesignal/OneSignalSDKUpdaterWorker.js", "/push/onesignal/OneSignalSDKWorker.js"];
const ASSET_URLS = ["/abusaif-3d-180.png", "/abusaif-3d-192.png", "/abusaif-3d-512.png", "/abusaif-3d-64.png", "/abusaif-3d-mask-192.png", "/abusaif-3d-mask-512.png", "/abusaif-3d-transparent-180.png", "/abusaif-3d-transparent-192.png", "/abusaif-3d-transparent-512.png", "/abusaif-3d-transparent-64.png", "/abusaif-app-1795777799-180.png", "/abusaif-app-1795777799-192.png", "/abusaif-app-1795777799-512.png", "/abusaif-app-1795777799-64.png", "/abusaif-app-1795777799-mask-192.png", "/abusaif-app-1795777799-mask-512.png", "/abusaif-apple-180.png", "/abusaif-cutout-180.png", "/abusaif-cutout-192.png", "/abusaif-cutout-512.png", "/abusaif-cutout-64.png", "/abusaif-cutout.svg", "/abusaif-favicon-64.png", "/abusaif-glass-180.png", "/abusaif-glass-192.png", "/abusaif-glass-512.png", "/abusaif-glass-64.png", "/abusaif-glass.svg", "/abusaif-icon-192.png", "/abusaif-icon-512.png", "/abusaif-icon.svg", "/abusaif-legend-180.png", "/abusaif-legend-192.png", "/abusaif-legend-512.png", "/abusaif-legend-64.png", "/abusaif-legend-mask-192.png", "/abusaif-legend-mask-512.png", "/abusaif-shield-192.png", "/abusaif-shield-512.png", "/abusaif-shield-mask-192.png", "/abusaif-shield-mask-512.png", "/favicon.ico", "/icon.svg", "/og-cover.jpg", "/store-qr.png", "/img/p_019a0b82ba97a0.jpg", "/img/p_03e48e32d83ab1.jpg", "/img/p_0759396e7a9741.jpg", "/img/p_0815cef80e7232.jpg", "/img/p_093455f202c13a.jpg", "/img/p_0a48adae315837.jpg", "/img/p_0a7cde9bc9acd7.jpg", "/img/p_0a81251222b0db.jpg", "/img/p_0ea5edb2736ea4.jpg", "/img/p_100a46aeef82e5.jpg", "/img/p_10880ba40a0ec3.jpg", "/img/p_114d3c814b4fe2.jpg", "/img/p_119c2e0aead59e.jpg", "/img/p_19fe4e90b3ca69.jpg", "/img/p_1a1ecbc1d72b96.jpg", "/img/p_1e6a8a3989f483.jpg", "/img/p_1e9a3c0d7e2f3c.jpg", "/img/p_22501c7ae8452b.jpg", "/img/p_24085fdacdd1b7.jpg", "/img/p_272b363b5f800c.jpg", "/img/p_27a2be9bd612c0.jpg", "/img/p_29965168511b1f.jpg", "/img/p_2a746427684bbd.jpg", "/img/p_2a906a1e090a9e.jpg", "/img/p_2ac0438fff3aca.jpg", "/img/p_2d830f4dc3f01e.jpg", "/img/p_2d99a0bc027aa1.jpg", "/img/p_342b80b5f3a471.jpg", "/img/p_352ad798688596.jpg", "/img/p_3f04431bed7213.jpg", "/img/p_448db364ea0f3b.jpg", "/img/p_4559b7dfe9aa3b.jpg", "/img/p_49670bebe05ef2.jpg", "/img/p_4beef3f2d07f5d.jpg", "/img/p_4d1e38a6e15c87.jpg", "/img/p_4e7ca5cf5a6614.jpg", "/img/p_523b4f7bd5ac38.jpg", "/img/p_52e4b186716b54.jpg", "/img/p_52e5bd3f997def.jpg", "/img/p_5339a824b96e68.jpg", "/img/p_5508263c24d811.jpg", "/img/p_576653a30359b8.jpg", "/img/p_5aebc9b5c64cef.jpg", "/img/p_5b0e13103021b6.jpg", "/img/p_5c0f5301d8d5fc.jpg", "/img/p_5cbc50d5f06541.jpg", "/img/p_5cd92a83b72d9d.jpg", "/img/p_63189b39d20e29.jpg", "/img/p_67d330e58fdfa3.jpg", "/img/p_67f238261bf6aa.jpg", "/img/p_6973edab293974.jpg", "/img/p_6b54d637ed365e.jpg", "/img/p_6b6fc438c409ef.jpg", "/img/p_6c0bda7b8dfdff.jpg", "/img/p_6d8d706b974f6d.jpg", "/img/p_6e0201817c2d41.jpg", "/img/p_6e80c342f32cd7.jpg", "/img/p_6f973a9ce784ad.jpg", "/img/p_73b29af0ee0f5d.jpg", "/img/p_75cab0382fb34b.jpg", "/img/p_75fe03d2c73838.jpg", "/img/p_7868f2fd60a5b1.jpg", "/img/p_78a48f3045dadb.jpg", "/img/p_7c4e1678153065.jpg", "/img/p_7cbd7548a81037.jpg", "/img/p_7d4745d0c6c865.jpg", "/img/p_81952aed8c4762.jpg", "/img/p_8272992028bc9b.jpg", "/img/p_8336b79c5b3383.jpg", "/img/p_836549700acb56.jpg", "/img/p_84965ef9bde709.jpg", "/img/p_84abd826f5c89a.jpg", "/img/p_87bae45db01daf.jpg", "/img/p_8a5cd056a94225.jpg", "/img/p_8b8092543d73d7.jpg", "/img/p_8e0b7ba1fd5572.jpg", "/img/p_8fd26333455822.jpg", "/img/p_8fdb144623b322.jpg", "/img/p_91f0c1d11ee473.jpg", "/img/p_954c2ee8499cd7.jpg", "/img/p_9656e3654e28d6.jpg", "/img/p_96ece3599975aa.jpg", "/img/p_981bac4080ea5a.jpg", "/img/p_985c6dd85a91e2.jpg", "/img/p_98b9d5a3bc849e.jpg", "/img/p_9c18f48b30a97b.jpg", "/img/p_9cc3cc1b4b98c2.jpg", "/img/p_9e38fad369178f.jpg", "/img/p_9f84722fbb22c6.jpg", "/img/p_ac4730bf44344f.jpg", "/img/p_ae13ab4061fb22.jpg", "/img/p_b02ec4a0904af2.jpg", "/img/p_b0cd6a3aec2517.jpg", "/img/p_b101ede2191313.jpg", "/img/p_b4fb7d438e5f1f.jpg", "/img/p_b685b13e31c031.jpg", "/img/p_b6ed5f729e12e6.jpg", "/img/p_ba242c39ec1b1c.jpg", "/img/p_bcd42e1e4be899.jpg", "/img/p_c001a846d88b7e.jpg", "/img/p_c09888291b9f97.jpg", "/img/p_c2c96afb7b453b.jpg", "/img/p_c2e225d18956d4.jpg", "/img/p_c3e4b1c361ed94.jpg", "/img/p_c492c6d0104b18.jpg", "/img/p_c63cd8d79131ae.jpg", "/img/p_c6f51398fffd59.jpg", "/img/p_c7be2677365d09.jpg", "/img/p_c7be7bd431adc8.jpg", "/img/p_c823f5b7529dd4.jpg", "/img/p_c939c131bf2ac1.jpg", "/img/p_c9c65b1c275c5b.jpg", "/img/p_cad9bcaef6d966.jpg", "/img/p_ce5557af06fce0.jpg", "/img/p_cf6e474577fc55.jpg", "/img/p_d01459fb5a4b56.jpg", "/img/p_d1231230e36bb1.jpg", "/img/p_d29507c936c16a.jpg", "/img/p_d3f3ef8429b994.jpg", "/img/p_d6c37e444251d4.jpg", "/img/p_d8cc4d4cec8fab.jpg", "/img/p_d9f4366ebe4052.jpg", "/img/p_db27a94f5b2066.jpg", "/img/p_dca5c14cdb0016.jpg", "/img/p_dcf9b06df37c89.jpg", "/img/p_dec7df110e599d.jpg", "/img/p_df2457aeab3eaa.jpg", "/img/p_e02aa24d53f7b8.jpg", "/img/p_e0547ad704c7d1.jpg", "/img/p_e15bd142d61051.jpg", "/img/p_e2d70f4b445b2d.jpg", "/img/p_e4b063b9089a70.jpg", "/img/p_e5918d98879fe1.jpg", "/img/p_e5be784de1826b.jpg", "/img/p_e82f3bedab425e.jpg", "/img/p_ecf6a3443778aa.jpg", "/img/p_f1b033cc72a839.jpg", "/img/p_f1fab0b143b63c.jpg", "/img/p_f37889551c3ca1.jpg", "/img/p_f47ccc2330e39a.jpg", "/img/p_f54237b5986a19.jpg", "/img/p_f69c176f2e4269.jpg", "/img/p_f6e2aa4e890c01.jpg", "/img/p_f8b7b9fdcd3528.jpg", "/img/p_f979b6d24c21b1.jpg", "/img/p_fb8e821fd3db18.jpg", "/img/p_fbeb144efc2083.jpg", "/img/p_fd39cb6db6ac73.jpg", "/img/p_fd744818589594.jpg", "/img/p_ffee15d207c6e6.jpg", "/fonts/IBMPlexSansArabic-Bold.ttf", "/fonts/IBMPlexSansArabic-Regular.ttf"];

async function fetchTimeout(req, ms) {
  if (typeof AbortController === "undefined") {
    return fetch(req);
  }
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(req, { signal: ctrl.signal });
  } finally {
    clearTimeout(tid);
  }
}

/* استجابة نظيفة 100%: Content-Type فقط بدون content-encoding أو redirect لمنع ERR_CONTENT_DECODING_FAILED */
async function toCleanResponse(res, fallbackType) {
  const ct = res.headers.get("content-type") || fallbackType || "application/octet-stream";
  const buf = await res.arrayBuffer();
  return new Response(buf, {
    status: 200,
    statusText: "OK",
    headers: { "Content-Type": ct },
  });
}

async function cacheHtmlUrl(cache, urlStr, timeoutMs) {
  try {
    const fetchUrl = urlStr + (urlStr.indexOf("?") === -1 ? "?" : "&") + "ab_sw_seed=" + Date.now();
    const res = await fetchTimeout(new Request(fetchUrl, { cache: "no-store" }), timeoutMs || 45000);
    if (!res || !res.ok || res.type === "opaque") return false;
    const htmlText = await res.text();
    if (!htmlText || htmlText.length < 800) return false;
    const clean = new Response(htmlText, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
    const keyPath = (urlStr === "/" || urlStr === "/index.html") ? "/" : urlStr.split("?")[0];
    await cache.put(keyPath, clean.clone());
    if (keyPath === "/") {
      await cache.put("/index.html", clean.clone());
    }
    return true;
  } catch (e) {
    return false;
  }
}

async function safePutUrl(cache, rawUrl, timeoutMs) {
  try {
    const urlStr = String(rawUrl || "").trim();
    if (!urlStr || urlStr.startsWith("data:") || urlStr.startsWith("blob:")) return false;

    const isSameOrigin = urlStr.startsWith("/") || urlStr.startsWith(self.location.origin);
    if (isSameOrigin) {
      const pathOnly = urlStr.startsWith("/") ? urlStr.split("?")[0] : new URL(urlStr).pathname;
      if (pathOnly === "/" || /\.html?$/i.test(pathOnly)) {
        return await cacheHtmlUrl(cache, pathOnly, timeoutMs || 45000);
      }
      const res = await fetchTimeout(new Request(urlStr, { cache: "no-store" }), timeoutMs || 25000);
      if (res && res.ok && res.type !== "opaque") {
        const clean = await toCleanResponse(res);
        await cache.put(pathOnly, clean);
        return true;
      }
      return false;
    }

    const res = await fetchTimeout(new Request(urlStr, { mode: "no-cors" }), timeoutMs || 15000);
    if (res && (res.ok || res.type === "opaque")) {
      await cache.put(urlStr, res.clone());
      return true;
    }
  } catch (e) {}
  return false;
}

async function cacheInBatches(cache, list, batchSize, timeoutMs) {
  const size = batchSize || 5;
  let ok = 0;
  for (let i = 0; i < list.length; i += size) {
    const slice = list.slice(i, i + size);
    const resList = await Promise.all(slice.map((u) => safePutUrl(cache, u, timeoutMs)));
    for (let r = 0; r < resList.length; r++) {
      if (resList[r]) ok++;
    }
  }
  return ok;
}

async function verifyCleanHome(cache) {
  const hit = (await cache.match("/")) || (await cache.match("/index.html"));
  if (!hit) return { ok: false, bytes: 0 };
  if (hit.redirected || hit.headers.get("content-encoding")) {
    return { ok: false, bytes: 0 };
  }
  try {
    const buf = await hit.clone().arrayBuffer();
    return { ok: buf.byteLength > 800, bytes: buf.byteLength };
  } catch (e) {
    return { ok: false, bytes: 0 };
  }
}

/* 1) التثبيت: حفظ الصفحة الرئيسية والملفات الأساسية بنسخ نظيفة */
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cacheHtmlUrl(cache, "/", 45000);
    const restCore = CORE_URLS.filter((u) => u !== "/" && u !== "/index.html");
    await cacheInBatches(cache, restCore, 4, 25000);
    await self.skipWaiting();
  })());
});

/* 2) التفعيل: مسح كل الكاشات القديمة التالفة (v1/v2/v3) فوراً وتولي التحكم بالصفحة */
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())));
    await self.clients.claim();
  })());
});

/* 3) حفظ الصور والتحقق الفعلي وإرسال النتيجة الدقيقة للصفحة */
self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (data.type === "WARM_ALL") {
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);

      let homeCheck = await verifyCleanHome(cache);
      if (!homeCheck.ok) {
        await cacheHtmlUrl(cache, "/", 45000);
        homeCheck = await verifyCleanHome(cache);
      }

      const extra = Array.isArray(data.urls) ? data.urls : [];
      const seen = new Set();
      const pending = [];
      const all = CORE_URLS.concat(ASSET_URLS, extra);
      for (let i = 0; i < all.length; i++) {
        const u = String(all[i] || "").trim();
        if (!u || seen.has(u) || u.startsWith("data:") || u.startsWith("blob:")) continue;
        seen.add(u);
        const keyCheck = u.startsWith("/") ? u.split("?")[0] : (u.startsWith(self.location.origin) ? new URL(u).pathname : u);
        const hit = await cache.match(keyCheck, { ignoreSearch: true });
        if (!hit) pending.push(u);
      }
      if (pending.length) {
        await cacheInBatches(cache, pending, 5, 25000);
      }

      const totalKeys = (await cache.keys()).length;
      const cls = await self.clients.matchAll({ type: "window" });
      for (let c = 0; c < cls.length; c++) {
        cls[c].postMessage({
          type: "OFFLINE_STATUS_V4",
          cache: CACHE_NAME,
          verifiedHtml: homeCheck.ok,
          htmlKb: Math.round(homeCheck.bytes / 1024),
          count: totalKeys,
          manual: !!data.manual,
        });
      }
    })());
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (!req || req.method !== "GET") return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return;
    /* ABUDHIYA_PUSH_BYPASS */
    if (url.hostname.indexOf("onesignal.com") !== -1 || url.pathname.indexOf("/push/") === 0 || url.pathname.indexOf("/api/") === 0 || url.pathname === "/push_config.json") return;


  /* تجاهل طلبات البذر الداخلية حتى لا تدخل حلقة */
  if (url.searchParams.has("ab_sw_seed") || url.searchParams.has("ab_cache_seed")) return;

  const isSameOrigin = url.origin === self.location.origin;
  const accept = req.headers.get("accept") || "";
  const isNav = req.mode === "navigate" || (isSameOrigin && accept.indexOf("text/html") !== -1);

  /* أ) فتح صفحات المتجر: من الكاش النظيف فوراً (0ms) + تحديث صامت بالخلفية عند توفر النت */
  if (isNav) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const primaryKey = (url.pathname.indexOf("wholesale") !== -1) ? "/wholesale.html" : "/";
      const cachedPage =
        (await cache.match(primaryKey)) ||
        (await cache.match("/index.html")) ||
        (await cache.match("/"));

      const bgUpdate = cacheHtmlUrl(cache, primaryKey, 25000).catch(() => false);

      if (cachedPage && !cachedPage.redirected && !cachedPage.headers.get("content-encoding")) {
        event.waitUntil(bgUpdate);
        return cachedPage;
      }

      /* أول مرة قبل اكتمال الكاش */
      const freshOk = await bgUpdate;
      if (freshOk) {
        const freshHit = (await cache.match(primaryKey)) || (await cache.match("/"));
        if (freshHit) return freshHit;
      }

      try {
        return await fetch(req);
      } catch (e) {
        return new Response(
          '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>أبوسيف للتجارة العامة</title></head><body style="background:#0a0a0d;color:#fef08a;font-family:sans-serif;text-align:center;padding:42px 20px"><h2>📡 المتجر لم يُحفظ بعد على هذا المتصفح</h2><p style="color:#e2e8f0;line-height:1.8;font-size:15px">شغّل الإنترنت وافتح الرابط في <b>Chrome</b>، وانتظر ثوانٍ حتى تظهر رسالة:<br><b>«✅ تم الحفظ النظيف (XX KB) — جاهز الآن بدون نت»</b></p></body></html>',
          { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }
    })());
    return;
  }

  /* ب) الصور والملفات والخطوط: Cache-First فوري من الكاش النظيف */
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const keyPath = isSameOrigin ? url.pathname : req;
    const cached = (await cache.match(keyPath, { ignoreSearch: true })) || (await cache.match(req, { ignoreSearch: true }));
    if (cached && !cached.headers.get("content-encoding")) {
      return cached;
    }

    try {
      const netRes = await fetchTimeout(req, isSameOrigin ? 12000 : 5000);
      if (netRes && netRes.ok && isSameOrigin && netRes.type !== "opaque") {
        const clean = await toCleanResponse(netRes);
        cache.put(url.pathname, clean.clone()).catch(() => {});
        return clean;
      }
      if (netRes && (netRes.ok || netRes.type === "opaque")) {
        cache.put(req, netRes.clone()).catch(() => {});
      }
      return netRes;
    } catch (e) {
      if (req.destination === "style" || url.hostname.indexOf("fonts.googleapis") !== -1) {
        return new Response("", { status: 200, headers: { "Content-Type": "text/css; charset=utf-8" } });
      }
      if (req.destination === "script") {
        return new Response("", { status: 200, headers: { "Content-Type": "application/javascript; charset=utf-8" } });
      }
      if (req.destination === "image") {
        return new Response(
          '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>',
          { status: 200, headers: { "Content-Type": "image/svg+xml" } }
        );
      }
      return new Response("", { status: 504 });
    }
  })());
});
