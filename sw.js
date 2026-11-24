// ABUDHIYA OFFLINE-FIRST SERVICE WORKER — 1795495760
const CACHE_NAME = "abudhiya-offline-v496425";
const CORE_URLS = ["./", "./index.html", "./manifest.json", "./wholesale.html", "./store/index.html"];
const ASSET_URLS = ["./icon.svg", "./og-cover.jpg", "./img/p_019a0b82ba97a0.jpg", "./img/p_03e48e32d83ab1.jpg", "./img/p_0759396e7a9741.jpg", "./img/p_0815cef80e7232.jpg", "./img/p_093455f202c13a.jpg", "./img/p_0a48adae315837.jpg", "./img/p_0a7cde9bc9acd7.jpg", "./img/p_0a81251222b0db.jpg", "./img/p_0ea5edb2736ea4.jpg", "./img/p_100a46aeef82e5.jpg", "./img/p_10880ba40a0ec3.jpg", "./img/p_114d3c814b4fe2.jpg", "./img/p_119c2e0aead59e.jpg", "./img/p_19fe4e90b3ca69.jpg", "./img/p_1a1ecbc1d72b96.jpg", "./img/p_1e6a8a3989f483.jpg", "./img/p_1e9a3c0d7e2f3c.jpg", "./img/p_22501c7ae8452b.jpg", "./img/p_24085fdacdd1b7.jpg", "./img/p_272b363b5f800c.jpg", "./img/p_27a2be9bd612c0.jpg", "./img/p_29965168511b1f.jpg", "./img/p_2a746427684bbd.jpg", "./img/p_2a906a1e090a9e.jpg", "./img/p_2ac0438fff3aca.jpg", "./img/p_2d830f4dc3f01e.jpg", "./img/p_2d99a0bc027aa1.jpg", "./img/p_342b80b5f3a471.jpg", "./img/p_352ad798688596.jpg", "./img/p_3f04431bed7213.jpg", "./img/p_448db364ea0f3b.jpg", "./img/p_4559b7dfe9aa3b.jpg", "./img/p_49670bebe05ef2.jpg", "./img/p_4beef3f2d07f5d.jpg", "./img/p_4d1e38a6e15c87.jpg", "./img/p_4e7ca5cf5a6614.jpg", "./img/p_523b4f7bd5ac38.jpg", "./img/p_52e4b186716b54.jpg", "./img/p_52e5bd3f997def.jpg", "./img/p_5339a824b96e68.jpg", "./img/p_5508263c24d811.jpg", "./img/p_576653a30359b8.jpg", "./img/p_5aebc9b5c64cef.jpg", "./img/p_5b0e13103021b6.jpg", "./img/p_5c0f5301d8d5fc.jpg", "./img/p_5cbc50d5f06541.jpg", "./img/p_5cd92a83b72d9d.jpg", "./img/p_63189b39d20e29.jpg", "./img/p_67d330e58fdfa3.jpg", "./img/p_67f238261bf6aa.jpg", "./img/p_6973edab293974.jpg", "./img/p_6b54d637ed365e.jpg", "./img/p_6b6fc438c409ef.jpg", "./img/p_6c0bda7b8dfdff.jpg", "./img/p_6d8d706b974f6d.jpg", "./img/p_6e0201817c2d41.jpg", "./img/p_6e80c342f32cd7.jpg", "./img/p_6f973a9ce784ad.jpg", "./img/p_73b29af0ee0f5d.jpg", "./img/p_75cab0382fb34b.jpg", "./img/p_75fe03d2c73838.jpg", "./img/p_7868f2fd60a5b1.jpg", "./img/p_78a48f3045dadb.jpg", "./img/p_7c4e1678153065.jpg", "./img/p_7cbd7548a81037.jpg", "./img/p_7d4745d0c6c865.jpg", "./img/p_81952aed8c4762.jpg", "./img/p_8272992028bc9b.jpg", "./img/p_8336b79c5b3383.jpg", "./img/p_836549700acb56.jpg", "./img/p_84965ef9bde709.jpg", "./img/p_84abd826f5c89a.jpg", "./img/p_87bae45db01daf.jpg", "./img/p_8a5cd056a94225.jpg", "./img/p_8b8092543d73d7.jpg", "./img/p_8e0b7ba1fd5572.jpg", "./img/p_8fd26333455822.jpg", "./img/p_8fdb144623b322.jpg", "./img/p_91f0c1d11ee473.jpg", "./img/p_954c2ee8499cd7.jpg", "./img/p_9656e3654e28d6.jpg", "./img/p_96ece3599975aa.jpg", "./img/p_981bac4080ea5a.jpg", "./img/p_985c6dd85a91e2.jpg", "./img/p_98b9d5a3bc849e.jpg", "./img/p_9c18f48b30a97b.jpg", "./img/p_9cc3cc1b4b98c2.jpg", "./img/p_9e38fad369178f.jpg", "./img/p_9f84722fbb22c6.jpg", "./img/p_ac4730bf44344f.jpg", "./img/p_ae13ab4061fb22.jpg", "./img/p_b02ec4a0904af2.jpg", "./img/p_b0cd6a3aec2517.jpg", "./img/p_b101ede2191313.jpg", "./img/p_b4fb7d438e5f1f.jpg", "./img/p_b685b13e31c031.jpg", "./img/p_b6ed5f729e12e6.jpg", "./img/p_ba242c39ec1b1c.jpg", "./img/p_bcd42e1e4be899.jpg", "./img/p_c001a846d88b7e.jpg", "./img/p_c09888291b9f97.jpg", "./img/p_c2c96afb7b453b.jpg", "./img/p_c2e225d18956d4.jpg", "./img/p_c3e4b1c361ed94.jpg", "./img/p_c492c6d0104b18.jpg", "./img/p_c63cd8d79131ae.jpg", "./img/p_c6f51398fffd59.jpg", "./img/p_c7be2677365d09.jpg", "./img/p_c7be7bd431adc8.jpg", "./img/p_c823f5b7529dd4.jpg", "./img/p_c939c131bf2ac1.jpg", "./img/p_c9c65b1c275c5b.jpg", "./img/p_cad9bcaef6d966.jpg", "./img/p_ce5557af06fce0.jpg", "./img/p_cf6e474577fc55.jpg", "./img/p_d01459fb5a4b56.jpg", "./img/p_d1231230e36bb1.jpg", "./img/p_d29507c936c16a.jpg", "./img/p_d3f3ef8429b994.jpg", "./img/p_d6c37e444251d4.jpg", "./img/p_d8cc4d4cec8fab.jpg", "./img/p_d9f4366ebe4052.jpg", "./img/p_db27a94f5b2066.jpg", "./img/p_dca5c14cdb0016.jpg", "./img/p_dcf9b06df37c89.jpg", "./img/p_dec7df110e599d.jpg", "./img/p_df2457aeab3eaa.jpg", "./img/p_e02aa24d53f7b8.jpg", "./img/p_e0547ad704c7d1.jpg", "./img/p_e15bd142d61051.jpg", "./img/p_e2d70f4b445b2d.jpg", "./img/p_e4b063b9089a70.jpg", "./img/p_e5918d98879fe1.jpg", "./img/p_e5be784de1826b.jpg", "./img/p_e82f3bedab425e.jpg", "./img/p_ecf6a3443778aa.jpg", "./img/p_f1b033cc72a839.jpg", "./img/p_f1fab0b143b63c.jpg", "./img/p_f37889551c3ca1.jpg", "./img/p_f47ccc2330e39a.jpg", "./img/p_f54237b5986a19.jpg", "./img/p_f69c176f2e4269.jpg", "./img/p_f6e2aa4e890c01.jpg", "./img/p_f8b7b9fdcd3528.jpg", "./img/p_f979b6d24c21b1.jpg", "./img/p_fb8e821fd3db18.jpg", "./img/p_fbeb144efc2083.jpg", "./img/p_fd39cb6db6ac73.jpg", "./img/p_fd744818589594.jpg", "./img/p_ffee15d207c6e6.jpg"];

async function safeCacheAdd(cache, url) {
  try {
    const req = new Request(url, { cache: 'reload' });
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) {
      await cache.put(url, res.clone());
    }
  } catch (e) {}
}

async function cacheInBatches(cache, list, batchSize) {
  for (let i = 0; i < list.length; i += batchSize) {
    const slice = list.slice(i, i + batchSize);
    await Promise.all(slice.map((u) => safeCacheAdd(cache, u)));
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cacheInBatches(cache, CORE_URLS, 4);
    await cacheInBatches(cache, ASSET_URLS.slice(0, 120), 6);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data;
  if (data && data.type === 'CACHE_URLS' && Array.isArray(data.urls)) {
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      await cacheInBatches(cache, data.urls.slice(0, 150), 5);
    })());
  }
});

function fetchWithTimeout(req, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req).then((res) => {
      clearTimeout(timer);
      resolve(res);
    }).catch((err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.pathname.startsWith('/api/') || url.hostname.includes('ntfy.sh')) return;

  // 1) تنقل الصفحات (يفتح فوراً من الكاش عند انقطاع النت أو بطء الشبكة)
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const isWholesale = url.pathname.indexOf('wholesale') !== -1;
      const cleanKey = isWholesale ? './wholesale.html' : './index.html';
      try {
        const netRes = await fetchWithTimeout(req, 3000);
        if (netRes && netRes.ok) {
          cache.put(cleanKey, netRes.clone());
          if (!isWholesale) cache.put('./', netRes.clone());
          return netRes;
        }
      } catch (e) {}
      return (
        (await cache.match(cleanKey)) ||
        (await cache.match('./index.html')) ||
        (await cache.match('./')) ||
        new Response('<!doctype html><html dir="rtl"><body style="font-family:sans-serif;text-align:center;padding:40px"><h3>الرجاء فتح المتجر مرة واحدة مع توفر الإنترنت لحفظ الأصناف على جهازك</h3></body></html>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
      );
    })());
    return;
  }

  // 2) ملفات البيانات والصور والخطوط (كاش أولاً مع تحديث صامت بالخلفية)
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: true });
    const fetchPromise = fetch(req).then((netRes) => {
      if (netRes && (netRes.ok || netRes.type === 'opaque')) {
        cache.put(req, netRes.clone());
      }
      return netRes;
    }).catch(() => null);

    if (cached) {
      event.waitUntil(fetchPromise);
      return cached;
    }
    const netRes = await fetchPromise;
    if (netRes) return netRes;
    return new Response('', { status: 504, statusText: 'Offline' });
  })());
});
