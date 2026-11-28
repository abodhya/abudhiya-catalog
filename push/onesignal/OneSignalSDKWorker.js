/* ABUDHIYA_ONESIGNAL_SW_PROXY_START */
(function () {
  if (self.__abOsSwProxyV1) return;
  self.__abOsSwProxyV1 = true;

  function rewriteOsUrl(u) {
    if (typeof u !== "string" || u.indexOf("onesignal.com") === -1) return u;
    var orig = self.location && self.location.origin ? self.location.origin : "";
    if (!orig) return u;
    return u
      .replace(/^(?:https?:)?\/\/cdn\.onesignal\.com\//i, orig + "/_os/cdn/")
      .replace(/^(?:https?:)?\/\/api\.onesignal\.com\//i, orig + "/_os/api/")
      .replace(/^(?:https?:)?\/\/onesignal\.com\//i, orig + "/_os/main/");
  }

  if (typeof self.importScripts === "function") {
    var origImport = self.importScripts;
    self.importScripts = function () {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(rewriteOsUrl(arguments[i]));
      }
      return origImport.apply(self, args);
    };
  }

  if (typeof self.fetch === "function") {
    var origFetch = self.fetch;
    self.fetch = function (input, init) {
      try {
        if (typeof input === "string") {
          var nu = rewriteOsUrl(input);
          if (nu !== input) return origFetch.call(self, nu, init);
        } else if (input && typeof input === "object" && typeof input.url === "string") {
          var nu2 = rewriteOsUrl(input.url);
          if (nu2 !== input.url) {
            return origFetch.call(self, new Request(nu2, input), init);
          }
        }
      } catch (e) {}
      return origFetch.apply(self, arguments);
    };
  }
})();
/* ABUDHIYA_ONESIGNAL_SW_PROXY_END */

importScripts("/_os/cdn/sdks/web/v16/OneSignalSDK.sw.js");
