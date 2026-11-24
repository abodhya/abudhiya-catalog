/* Abudhiya / Abu Saif Bulletproof Offline Engine v3 */
const CACHE_NAME = "abudhiya-offline-v521258";
const CORE_URLS = ["/", "/apple-touch-icon.png", "/favicon.png", "/icon-192.png", "/icon-512.png", "/index.html", "/manifest.json", "/wholesale.html", "/store/index.html", "/api/order.js"];
const ASSET_URLS = ["/icon.svg", "/og-cover.jpg", "/img/p_019a0b82ba97a0.jpg", "/img/p_03e48e32d83ab1.jpg", "/img/p_0759396e7a9741.jpg", "/img/p_0815cef80e7232.jpg", "/img/p_093455f202c13a.jpg", "/img/p_0a48adae315837.jpg", "/img/p_0a7cde9bc9acd7.jpg", "/img/p_0a81251222b0db.jpg", "/img/p_0ea5edb2736ea4.jpg", "/img/p_100a46aeef82e5.jpg", "/img/p_10880ba40a0ec3.jpg", "/img/p_114d3c814b4fe2.jpg", "/img/p_119c2e0aead59e.jpg", "/img/p_19fe4e90b3ca69.jpg", "/img/p_1a1ecbc1d72b96.jpg", "/img/p_1e6a8a3989f483.jpg", "/img/p_1e9a3c0d7e2f3c.jpg", "/img/p_22501c7ae8452b.jpg", "/img/p_24085fdacdd1b7.jpg", "/img/p_272b363b5f800c.jpg", "/img/p_27a2be9bd612c0.jpg", "/img/p_29965168511b1f.jpg", "/img/p_2a746427684bbd.jpg", "/img/p_2a906a1e090a9e.jpg", "/img/p_2ac0438fff3aca.jpg", "/img/p_2d830f4dc3f01e.jpg", "/img/p_2d99a0bc027aa1.jpg", "/img/p_342b80b5f3a471.jpg", "/img/p_352ad798688596.jpg", "/img/p_3f04431bed7213.jpg", "/img/p_448db364ea0f3b.jpg", "/img/p_4559b7dfe9aa3b.jpg", "/img/p_49670bebe05ef2.jpg", "/img/p_4beef3f2d07f5d.jpg", "/img/p_4d1e38a6e15c87.jpg", "/img/p_4e7ca5cf5a6614.jpg", "/img/p_523b4f7bd5ac38.jpg", "/img/p_52e4b186716b54.jpg", "/img/p_52e5bd3f997def.jpg", "/img/p_5339a824b96e68.jpg", "/img/p_5508263c24d811.jpg", "/img/p_576653a30359b8.jpg", "/img/p_5aebc9b5c64cef.jpg", "/img/p_5b0e13103021b6.jpg", "/img/p_5c0f5301d8d5fc.jpg", "/img/p_5cbc50d5f06541.jpg", "/img/p_5cd92a83b72d9d.jpg", "/img/p_63189b39d20e29.jpg", "/img/p_67d330e58fdfa3.jpg", "/img/p_67f238261bf6aa.jpg", "/img/p_6973edab293974.jpg", "/img/p_6b54d637ed365e.jpg", "/img/p_6b6fc438c409ef.jpg", "/img/p_6c0bda7b8dfdff.jpg", "/img/p_6d8d706b974f6d.jpg", "/img/p_6e0201817c2d41.jpg", "/img/p_6e80c342f32cd7.jpg", "/img/p_6f973a9ce784ad.jpg", "/img/p_73b29af0ee0f5d.jpg", "/img/p_75cab0382fb34b.jpg", "/img/p_75fe03d2c73838.jpg", "/img/p_7868f2fd60a5b1.jpg", "/img/p_78a48f3045dadb.jpg", "/img/p_7c4e1678153065.jpg", "/img/p_7cbd7548a81037.jpg", "/img/p_7d4745d0c6c865.jpg", "/img/p_81952aed8c4762.jpg", "/img/p_8272992028bc9b.jpg", "/img/p_8336b79c5b3383.jpg", "/img/p_836549700acb56.jpg", "/img/p_84965ef9bde709.jpg", "/img/p_84abd826f5c89a.jpg", "/img/p_87bae45db01daf.jpg", "/img/p_8a5cd056a94225.jpg", "/img/p_8b8092543d73d7.jpg", "/img/p_8e0b7ba1fd5572.jpg", "/img/p_8fd26333455822.jpg", "/img/p_8fdb144623b322.jpg", "/img/p_91f0c1d11ee473.jpg", "/img/p_954c2ee8499cd7.jpg", "/img/p_9656e3654e28d6.jpg", "/img/p_96ece3599975aa.jpg", "/img/p_981bac4080ea5a.jpg", "/img/p_985c6dd85a91e2.jpg", "/img/p_98b9d5a3bc849e.jpg", "/img/p_9c18f48b30a97b.jpg", "/img/p_9cc3cc1b4b98c2.jpg", "/img/p_9e38fad369178f.jpg", "/img/p_9f84722fbb22c6.jpg", "/img/p_ac4730bf44344f.jpg", "/img/p_ae13ab4061fb22.jpg", "/img/p_b02ec4a0904af2.jpg", "/img/p_b0cd6a3aec2517.jpg", "/img/p_b101ede2191313.jpg", "/img/p_b4fb7d438e5f1f.jpg", "/img/p_b685b13e31c031.jpg", "/img/p_b6ed5f729e12e6.jpg", "/img/p_ba242c39ec1b1c.jpg", "/img/p_bcd42e1e4be899.jpg", "/img/p_c001a846d88b7e.jpg", "/img/p_c09888291b9f97.jpg", "/img/p_c2c96afb7b453b.jpg", "/img/p_c2e225d18956d4.jpg", "/img/p_c3e4b1c361ed94.jpg", "/img/p_c492c6d0104b18.jpg", "/img/p_c63cd8d79131ae.jpg", "/img/p_c6f51398fffd59.jpg", "/img/p_c7be2677365d09.jpg", "/img/p_c7be7bd431adc8.jpg", "/img/p_c823f5b7529dd4.jpg", "/img/p_c939c131bf2ac1.jpg", "/img/p_c9c65b1c275c5b.jpg", "/img/p_cad9bcaef6d966.jpg", "/img/p_ce5557af06fce0.jpg", "/img/p_cf6e474577fc55.jpg", "/img/p_d01459fb5a4b56.jpg", "/img/p_d1231230e36bb1.jpg", "/img/p_d29507c936c16a.jpg", "/img/p_d3f3ef8429b994.jpg", "/img/p_d6c37e444251d4.jpg", "/img/p_d8cc4d4cec8fab.jpg", "/img/p_d9f4366ebe4052.jpg", "/img/p_db27a94f5b2066.jpg", "/img/p_dca5c14cdb0016.jpg", "/img/p_dcf9b06df37c89.jpg", "/img/p_dec7df110e599d.jpg", "/img/p_df2457aeab3eaa.jpg", "/img/p_e02aa24d53f7b8.jpg", "/img/p_e0547ad704c7d1.jpg", "/img/p_e15bd142d61051.jpg", "/img/p_e2d70f4b445b2d.jpg", "/img/p_e4b063b9089a70.jpg", "/img/p_e5918d98879fe1.jpg", "/img/p_e5be784de1826b.jpg", "/img/p_e82f3bedab425e.jpg", "/img/p_ecf6a3443778aa.jpg", "/img/p_f1b033cc72a839.jpg", "/img/p_f1fab0b143b63c.jpg", "/img/p_f37889551c3ca1.jpg", "/img/p_f47ccc2330e39a.jpg", "/img/p_f54237b5986a19.jpg", "/img/p_f69c176f2e4269.jpg", "/img/p_f6e2aa4e890c01.jpg", "/img/p_f8b7b9fdcd3528.jpg", "/img/p_f979b6d24c21b1.jpg", "/img/p_fb8e821fd3db18.jpg", "/img/p_fbeb144efc2083.jpg", "/img/p_fd39cb6db6ac73.jpg", "/img/p_fd744818589594.jpg", "/img/p_ffee15d207c6e6.jpg", "/fonts/IBMPlexSansArabic-Bold.ttf", "/fonts/IBMPlexSansArabic-Regular.ttf"];

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

/* تحويل أي استجابة HTML/محلية إلى استجابة نظيفة غير معاد توجيهها (redirected = false) لمنع ERR_FAILED في Chrome */
async function toCleanResponse(res, defaultType) {
  const headers = new Headers(res.headers);
  headers.delete("content-length");
  if (defaultType && !headers.has("content-type")) {
    headers.set("content-type", defaultType);
  }
  const buf = await res.arrayBuffer();
  return new Response(buf, {
    status: (res.status && res.status >= 200 && res.status < 300) ? res.status : 200,
    statusText: res.statusText || "OK",
    headers,
  });
}

async function cacheHtmlUrl(cache, urlStr, timeoutMs) {
  try {
    const res = await fetchTimeout(new Request(urlStr, { cache: "no-store" }), timeoutMs || 45000);
    if (!res || !res.ok) return false;
    const clean = await toCleanResponse(res, "text/html; charset=utf-8");
    const cloneSize = (await clean.clone().arrayBuffer()).byteLength;
    if (cloneSize < 500) return false;
    await cache.put(urlStr, clean.clone());
    if (urlStr === "/" || urlStr === "/index.html") {
      await cache.put("/", clean.clone());
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
    if (isSameOrigin && (urlStr === "/" || /\.html?(?:\?|$)/i.test(urlStr))) {
      return await cacheHtmlUrl(cache, urlStr, timeoutMs || 45000);
    }

    if (isSameOrigin) {
      const res = await fetchTimeout(new Request(urlStr, { cache: "no-store" }), timeoutMs || 25000);
      if (res && res.ok) {
        const clean = res.redirected ? await toCleanResponse(res) : res.clone();
        await cache.put(urlStr, clean);
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
  const size = batchSize || 4;
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

async function hasVerifiedHome(cache) {
  const hit = (await cache.match("/", { ignoreSearch: true })) || (await cache.match("/index.html", { ignoreSearch: true }));
  return !!hit;
}

/* 1) التثبيت: حفظ الصفحة الرئيسية أولاً بمهلة 45 ثانية ثم بقية الملفات الأساسية */
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const homeOk = (await cacheHtmlUrl(cache, "/", 45000)) || (await cacheHtmlUrl(cache, "/index.html", 45000));
    const restCore = CORE_URLS.filter((u) => u !== "/" && u !== "/index.html");
    await cacheInBatches(cache, restCore, 4, 25000);
    if (homeOk) {
      await self.skipWaiting();
    } else {
      await self.skipWaiting();
    }
  })());
});

/* 2) التفعيل: لا نحذف أي كاش سابق إلا إذا تأكدنا أن الكاش الجديد يحتوي الصفحة الرئيسية فعلياً */
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const ready = await hasVerifiedHome(cache);
    if (ready) {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) => (k !== CACHE_NAME && k.startsWith("abudhiya-offline-")) ? caches.delete(k) : Promise.resolve())
      );
    }
    await self.clients.claim();
  })());
});

/* 3) حفظ الصور والملفات وإرسال حالة التحقق الحقيقية للعميل */
self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (data.type === "WARM_ALL") {
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);

      /* التأكد أولاً من حفظ الصفحة الرئيسية في الكاش */
      if (!(await hasVerifiedHome(cache))) {
        await cacheHtmlUrl(cache, "/", 45000);
      }

      const extra = Array.isArray(data.urls) ? data.urls : [];
      const seen = new Set();
      const pending = [];
      const all = CORE_URLS.concat(ASSET_URLS, extra);
      for (let i = 0; i < all.length; i++) {
        const u = String(all[i] || "").trim();
        if (!u || seen.has(u) || u.startsWith("data:") || u.startsWith("blob:")) continue;
        seen.add(u);
        const hit = await cache.match(u, { ignoreSearch: true });
        if (!hit) pending.push(u);
      }
      if (pending.length) {
        await cacheInBatches(cache, pending, 5, 25000);
      }

      const verifiedHtml = await hasVerifiedHome(cache);
      const totalKeys = (await cache.keys()).length;
      const cls = await self.clients.matchAll({ type: "window" });
      for (let c = 0; c < cls.length; c++) {
        cls[c].postMessage({
          type: "OFFLINE_STATUS",
          cache: CACHE_NAME,
          verifiedHtml,
          count: totalKeys,
          manual: !!data.manual,
        });
      }
    })());
  }
});

async function findCachedHtml(req, pathname) {
  const cache = await caches.open(CACHE_NAME);
  const candidates = [];
  if (pathname && pathname.indexOf("wholesale") !== -1) {
    candidates.push("/wholesale.html", "/index.html", "/");
  } else {
    candidates.push("/", "/index.html");
  }

  for (let i = 0; i < candidates.length; i++) {
    const hit = await cache.match(candidates[i], { ignoreSearch: true });
    if (hit) return hit.redirected ? await toCleanResponse(hit, "text/html; charset=utf-8") : hit;
  }

  const reqHit = await cache.match(req, { ignoreSearch: true });
  if (reqHit) return reqHit.redirected ? await toCleanResponse(reqHit, "text/html; charset=utf-8") : reqHit;

  /* احتياط أخير: البحث في أي كاش قديم على الجهاز */
  for (let j = 0; j < candidates.length; j++) {
    const oldHit = await caches.match(candidates[j], { ignoreSearch: true });
    if (oldHit) return oldHit.redirected ? await toCleanResponse(oldHit, "text/html; charset=utf-8") : oldHit;
  }
  return null;
}

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

  const isSameOrigin = url.origin === self.location.origin;
  const accept = req.headers.get("accept") || "";
  const isNav = req.mode === "navigate" || (isSameOrigin && accept.indexOf("text/html") !== -1);

  /* أ) فتح صفحات المتجر: من الكاش فوراً في 0ms + تحديث صامت بالخلفية عند توفر النت */
  if (isNav) {
    event.respondWith((async () => {
      const cachedPage = await findCachedHtml(req, url.pathname);
      const cache = await caches.open(CACHE_NAME);

      const bgUpdate = (async () => {
        try {
          const targetPath = (url.pathname === "/" || url.pathname === "/index.html") ? "/" : url.pathname;
          await cacheHtmlUrl(cache, targetPath, 25000);
        } catch (e) {}
      })();

      if (cachedPage) {
        event.waitUntil(bgUpdate);
        return cachedPage;
      }

      /* أول زيارة قبل اكتمال الكاش */
      try {
        const netRes = await fetchTimeout(req, 35000);
        if (netRes && netRes.ok) {
          const clean = await toCleanResponse(netRes, "text/html; charset=utf-8");
          await cache.put(url.pathname, clean.clone());
          if (url.pathname === "/" || url.pathname === "/index.html") {
            await cache.put("/", clean.clone());
            await cache.put("/index.html", clean.clone());
          }
          return clean;
        }
      } catch (e) {}

      return new Response(
        '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>أبوسيف للتجارة العامة</title></head><body style="background:#0a0a0d;color:#fef08a;font-family:sans-serif;text-align:center;padding:42px 20px"><h2>📡 المتجر غير محفوظ بعد على هذا المتصفح</h2><p style="color:#e2e8f0;line-height:1.8;font-size:15px">شغّل الإنترنت وافتح الرابط في متصفح <b>Chrome</b>، وانتظر ثوانٍ حتى تظهر رسالة:<br><b>«✅ تم حفظ المتجر بالكامل — جاهز الآن بدون نت»</b><br>بعدها أطفئ الإنترنت وسيفتح معك فوراً.</p></body></html>',
        { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    })());
    return;
  }

  /* ب) الصور والملفات والخطوط: Cache-First فوري مع احتياط آمن عند انقطاع النت */
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = (await cache.match(req, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true }));
    if (cached) {
      if (isSameOrigin) {
        event.waitUntil(safePutUrl(cache, url.pathname, 20000));
      }
      return cached;
    }

    try {
      const netRes = await fetchTimeout(req, isSameOrigin ? 12000 : 5000);
      if (netRes && (netRes.ok || netRes.type === "opaque")) {
        const toStore = (isSameOrigin && netRes.redirected) ? await toCleanResponse(netRes) : netRes.clone();
        cache.put(req, toStore).catch(() => {});
      }
      return netRes;
    } catch (e) {
      const byPath = await caches.match(url.pathname, { ignoreSearch: true });
      if (byPath) return byPath;

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
