const https = require('https');
const TOPIC = "abudhiya_ord_78beff624ce0cb117eba";
const TOKEN = "20d8e5892f231c53cba7735a";

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  let body = req.body;
  if (!body) {
    const raw = await new Promise((resolve) => {
      let d = '';
      req.on('data', (c) => { d += c; });
      req.on('end', () => resolve(d));
    });
    try { body = JSON.parse(raw); } catch (e) { body = null; }
  } else if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (!body || !body.text || !body.orderId) return res.status(400).json({ ok: false });

  body.token = TOKEN;
  const payload = JSON.stringify(body);

  try {
    await new Promise((resolve, reject) => {
      const r = https.request(
        'https://ntfy.sh/' + encodeURIComponent(TOPIC),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
          }
        },
        (resp) => {
          resp.resume();
          resp.on('end', () => (resp.statusCode >= 200 && resp.statusCode < 300 ? resolve() : reject(new Error('HTTP ' + resp.statusCode))));
        }
      );
      r.on('error', reject);
      r.write(payload);
      r.end();
    });
    return res.status(200).json({ ok: true, orderId: body.orderId });
  } catch (e) {
    return res.status(502).json({ ok: false, error: e.message });
  }
};
