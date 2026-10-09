var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-0TIbvV/functionsWorker-0.8520150213517166.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var SITE = {
  name: "BabyBookAI",
  url: "https://babybookai.com",
  defaultOgImage: "/og/default.png",
  /**
   * Where visitors write. Cloudflare Email Routing forwards it to
   * info@photo-to-text.com, the address the store listings were set up with.
   */
  supportEmail: "info@babybookai.com"
};
var STORES = {
  appStore: null,
  googlePlay: "https://play.google.com/store/apps/details?id=com.babybookai.app"
};
var SMART_LINK = `${SITE.url}/get/`;
var onRequestGet = /* @__PURE__ */ __name2(({ request }) => {
  const ua = request.headers.get("user-agent") ?? "";
  const isApple = /iPhone|iPad|iPod/i.test(ua) || /Macintosh/i.test(ua) && /Mobile/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const target = isApple && STORES.appStore || isAndroid && STORES.googlePlay || // A desktop, or a store not live yet: the page with both buttons.
  new URL("/#download", request.url).href;
  return new Response(null, {
    status: 302,
    headers: { Location: target, "Cache-Control": "private, no-store" }
  });
}, "onRequestGet");
var LANGS = ["en", "es", "fr", "de", "it", "pt", "nl", "ja", "ko", "zh"];
var DEFAULT_LANG = "en";
var isLang = /* @__PURE__ */ __name2((value) => !!value && LANGS.includes(value), "isLang");
var LOCALES = {
  en: { name: "English", tag: "en", og: "en_US", intl: "en-US", country: "US" },
  es: { name: "Espa\xF1ol", tag: "es", og: "es_ES", intl: "es-ES", country: "ES" },
  fr: { name: "Fran\xE7ais", tag: "fr", og: "fr_FR", intl: "fr-FR", country: "FR" },
  de: { name: "Deutsch", tag: "de", og: "de_DE", intl: "de-DE", country: "DE" },
  it: { name: "Italiano", tag: "it", og: "it_IT", intl: "it-IT", country: "IT" },
  // European Portuguese, as the app writes it (bebé, telemóvel, tu).
  pt: { name: "Portugu\xEAs", tag: "pt", og: "pt_PT", intl: "pt-PT", country: "PT" },
  nl: { name: "Nederlands", tag: "nl", og: "nl_NL", intl: "nl-NL", country: "NL" },
  ja: { name: "\u65E5\u672C\u8A9E", tag: "ja", og: "ja_JP", intl: "ja-JP", country: "JP" },
  ko: { name: "\uD55C\uAD6D\uC5B4", tag: "ko", og: "ko_KR", intl: "ko-KR", country: "KR" },
  zh: { name: "\u7B80\u4F53\u4E2D\u6587", tag: "zh-Hans", og: "zh_CN", intl: "zh-CN", country: "CN" }
};
var COUNTRY_LANGS = {
  // Spanish
  ES: ["es"],
  MX: ["es"],
  AR: ["es"],
  CO: ["es"],
  CL: ["es"],
  PE: ["es"],
  VE: ["es"],
  EC: ["es"],
  GT: ["es"],
  CU: ["es"],
  BO: ["es"],
  DO: ["es"],
  HN: ["es"],
  PY: ["es"],
  SV: ["es"],
  NI: ["es"],
  CR: ["es"],
  PA: ["es"],
  UY: ["es"],
  PR: ["es"],
  GQ: ["es"],
  AD: ["es"],
  // French
  FR: ["fr"],
  MC: ["fr"],
  LU: ["fr", "de"],
  SN: ["fr"],
  CI: ["fr"],
  CM: ["fr"],
  MA: ["fr"],
  TN: ["fr"],
  // German
  DE: ["de"],
  AT: ["de"],
  LI: ["de"],
  CH: ["de", "fr", "it"],
  // Italian
  IT: ["it"],
  SM: ["it"],
  VA: ["it"],
  // Portuguese
  PT: ["pt"],
  BR: ["pt"],
  AO: ["pt"],
  MZ: ["pt"],
  // Dutch
  NL: ["nl"],
  BE: ["nl", "fr"],
  SR: ["nl"],
  // Japanese, Korean, Chinese
  JP: ["ja"],
  KR: ["ko"],
  CN: ["zh"],
  TW: ["zh"],
  HK: ["zh"],
  MO: ["zh"],
  // English where it shares the country with one of ours
  CA: ["en", "fr"]
};
var EN = {
  home: "",
  babyPhotoBook: "baby-photo-book",
  firstYear: "first-year-photo-book",
  boy: "baby-boy-photo-album",
  girl: "baby-girl-photo-album",
  ideas: "baby-photo-book-ideas",
  about: "about",
  support: "support",
  privacy: "privacy-policy",
  terms: "terms"
};
var SLUGS = {
  en: EN,
  es: {
    home: "",
    babyPhotoBook: "fotolibro-bebe",
    firstYear: "fotolibro-primer-ano",
    boy: "album-fotos-bebe-nino",
    girl: "album-fotos-bebe-nina",
    ideas: "ideas-fotolibro-bebe",
    about: "sobre-nosotros",
    support: "ayuda",
    privacy: "privacidad",
    terms: "condiciones"
  },
  fr: {
    home: "",
    babyPhotoBook: "livre-photo-bebe",
    firstYear: "livre-photo-premiere-annee",
    boy: "album-photo-bebe-garcon",
    girl: "album-photo-bebe-fille",
    ideas: "idees-livre-photo-bebe",
    about: "a-propos",
    support: "aide",
    privacy: "confidentialite",
    terms: "conditions"
  },
  de: {
    home: "",
    babyPhotoBook: "fotobuch-baby",
    firstYear: "fotobuch-erstes-lebensjahr",
    boy: "fotoalbum-baby-junge",
    girl: "fotoalbum-baby-maedchen",
    ideas: "fotobuch-baby-ideen",
    about: "ueber-uns",
    support: "hilfe",
    privacy: "datenschutz",
    terms: "agb"
  },
  it: {
    home: "",
    babyPhotoBook: "fotolibro-neonato",
    firstYear: "fotolibro-primo-anno",
    boy: "album-foto-bambino",
    girl: "album-foto-bambina",
    ideas: "idee-fotolibro-neonato",
    about: "chi-siamo",
    support: "assistenza",
    privacy: "privacy",
    terms: "termini"
  },
  pt: {
    home: "",
    babyPhotoBook: "fotolivro-bebe",
    firstYear: "fotolivro-primeiro-ano",
    boy: "album-fotos-bebe-menino",
    girl: "album-fotos-bebe-menina",
    ideas: "ideias-fotolivro-bebe",
    about: "sobre-nos",
    support: "ajuda",
    privacy: "privacidade",
    terms: "termos"
  },
  nl: {
    home: "",
    babyPhotoBook: "fotoboek-baby",
    firstYear: "fotoboek-eerste-jaar",
    boy: "fotoalbum-babyjongen",
    girl: "fotoalbum-babymeisje",
    ideas: "fotoboek-baby-ideeen",
    about: "over-ons",
    support: "hulp",
    privacy: "privacy",
    terms: "voorwaarden"
  },
  ja: EN,
  ko: EN,
  zh: EN
};
function path(page, lang) {
  const slug = SLUGS[lang][page];
  const prefix = lang === "en" ? "" : `/${lang}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}
__name(path, "path");
__name2(path, "path");
var BASE = {
  USD: { amount: 49.99, decimals: 2 },
  EUR: { amount: 44.99, decimals: 2 },
  GBP: { amount: 39.99, decimals: 2 },
  CAD: { amount: 74.99, decimals: 2 },
  AUD: { amount: 74.99, decimals: 2 },
  JPY: { amount: 7500, decimals: 0 },
  KRW: { amount: 69e3, decimals: 0 },
  CNY: { amount: 359, decimals: 2 }
};
var EURO = /* @__PURE__ */ new Set([
  "AT",
  "BE",
  "HR",
  "CY",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PT",
  "SK",
  "SI",
  "ES"
]);
function currencyFor(country) {
  switch (country) {
    case "US":
      return "USD";
    case "CA":
      return "CAD";
    case "GB":
      return "GBP";
    case "AU":
      return "AUD";
    case "JP":
      return "JPY";
    case "KR":
      return "KRW";
    case "CN":
      return "CNY";
    default:
      return EURO.has(country) ? "EUR" : "USD";
  }
}
__name(currencyFor, "currencyFor");
__name2(currencyFor, "currencyFor");
function moneyLocale(currency, country, lang) {
  const byCountry = {
    US: "en-US",
    GB: "en-GB",
    IE: "en-IE",
    AU: "en-AU",
    CA: lang === "fr" ? "fr-CA" : "en-CA",
    BE: lang === "nl" ? "nl-BE" : "fr-BE",
    DE: "de-DE",
    AT: "de-AT",
    FR: "fr-FR",
    ES: "es-ES",
    IT: "it-IT",
    PT: "pt-PT",
    NL: "nl-NL",
    JP: "ja-JP",
    KR: "ko-KR",
    CN: "zh-CN"
  };
  if (byCountry[country]) return byCountry[country];
  const home = {
    USD: "en-US",
    GBP: "en-GB",
    CAD: "en-CA",
    AUD: "en-AU",
    EUR: "de-DE",
    JPY: "ja-JP",
    KRW: "ko-KR",
    CNY: "zh-CN"
  };
  return home[currency];
}
__name(moneyLocale, "moneyLocale");
__name2(moneyLocale, "moneyLocale");
function priceFor(country, lang) {
  const currency = currencyFor(country);
  const { amount, decimals } = BASE[currency];
  const symbol = {
    USD: country === "US" ? "$" : "US$",
    CAD: "CA$",
    AUD: "A$",
    JPY: "\xA5"
  }[currency];
  const parts = new Intl.NumberFormat(moneyLocale(currency, country, lang), {
    style: "currency",
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).formatToParts(amount);
  return parts.map((p) => p.type === "currency" && symbol ? symbol : p.value).join("");
}
__name(priceFor, "priceFor");
__name2(priceFor, "priceFor");
var INCHES = /* @__PURE__ */ new Set(["US", "LR", "MM"]);
function sizeFor(country) {
  return INCHES.has(country) ? "11 \xD7 11\u2033" : "28 \xD7 28 cm";
}
__name(sizeFor, "sizeFor");
__name2(sizeFor, "sizeFor");
var COOKIE = "lang";
var BOTS = /bot|crawl|spider|slurp|facebookexternalhit|embedly|pinterest|whatsapp|telegram|lighthouse|pagespeed|headless|preview|validator/i;
function cookie(request, name) {
  const match2 = (request.headers.get("cookie") ?? "").match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match2 ? decodeURIComponent(match2[1]) : null;
}
__name(cookie, "cookie");
__name2(cookie, "cookie");
function langOf(pathname) {
  const first = pathname.split("/")[1];
  return isLang(first) ? first : DEFAULT_LANG;
}
__name(langOf, "langOf");
__name2(langOf, "langOf");
function preferred(request, choices) {
  const accepted = (request.headers.get("accept-language") ?? "").split(",").map((part) => {
    const [tag, q] = part.trim().split(";q=");
    return { lang: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
  }).sort((a, b) => b.q - a.q);
  return accepted.find((a) => choices.includes(a.lang))?.lang ?? choices[0];
}
__name(preferred, "preferred");
__name2(preferred, "preferred");
function sameSite(referer, url) {
  try {
    return !!referer && new URL(referer).host === url.host;
  } catch {
    return false;
  }
}
__name(sameSite, "sameSite");
__name2(sameSite, "sameSite");
function homeFor(request, url, country) {
  if (BOTS.test(request.headers.get("user-agent") ?? "")) return null;
  if (sameSite(request.headers.get("referer"), url)) return null;
  const chosen = cookie(request, COOKIE);
  const lang = isLang(chosen) ? chosen : preferred(request, COUNTRY_LANGS[country] ?? [DEFAULT_LANG]);
  return lang === DEFAULT_LANG ? null : lang;
}
__name(homeFor, "homeFor");
__name2(homeFor, "homeFor");
var onRequest = /* @__PURE__ */ __name2(async (context) => {
  const { request } = context;
  if (request.method !== "GET" && request.method !== "HEAD") return context.next();
  const url = new URL(request.url);
  const country = (request.cf?.country ?? "").toUpperCase();
  if (url.pathname === "/") {
    const lang2 = homeFor(request, url, country);
    if (lang2) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(path("home", lang2) + url.search, url).href,
          "Cache-Control": "private, no-store",
          Vary: "Cookie, Accept-Language"
        }
      });
    }
  }
  const response = await context.next();
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;
  const lang = langOf(url.pathname);
  const home = LOCALES[lang].country;
  const known = /^[A-Z]{2}$/.test(country) && country !== "XX" && country !== "T1";
  const price = known ? priceFor(country, lang) : null;
  const size = known ? sizeFor(country) : null;
  const rewrite = price && price !== priceFor(home, lang) || size && size !== sizeFor(home);
  let out = response;
  if (rewrite) {
    out = new HTMLRewriter().on("[data-price]", { element: /* @__PURE__ */ __name2((el) => void el.setInnerContent(price), "element") }).on("[data-size]", { element: /* @__PURE__ */ __name2((el) => void el.setInnerContent(size), "element") }).transform(response);
    out = new Response(out.body, out);
    out.headers.delete("etag");
  }
  if (response.status === 200 && cookie(request, COOKIE) !== lang) {
    if (out === response) out = new Response(response.body, response);
    out.headers.append("Set-Cookie", `${COOKIE}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`);
  }
  return out;
}, "onRequest");
var routes = [
  {
    routePath: "/get/:path*",
    mountPath: "/get",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/",
    mountPath: "/",
    method: "",
    middlewares: [onRequest],
    modules: []
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path2 = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path2 += prefix;
        prefix = "";
      }
      if (path2) {
        result.push(path2);
        path2 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path2 += value;
      continue;
    }
    if (path2) {
      result.push(path2);
      path2 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path2 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path2, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path2, keys) {
  if (!keys)
    return path2;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path2.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path2.source);
  }
  return path2;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path2) {
    return pathToRegexp(path2, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path2, keys, options) {
  return tokensToRegexp(parse(path2, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path2, keys, options) {
  if (path2 instanceof RegExp)
    return regexpToRegexp(path2, keys);
  if (Array.isArray(path2))
    return arrayToRegexp(path2, keys, options);
  return stringToRegexp(path2, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path: path2 } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path2,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-0TIbvV/skn4kkq1rg.js
var define_ROUTES_default = {
  version: 1,
  include: ["/*"],
  exclude: [
    "/_astro/*",
    "/brand/*",
    "/og/*",
    "/favicon.svg",
    "/favicon.ico",
    "/apple-touch-icon.png",
    "/robots.txt",
    "/sitemap-index.xml",
    "/sitemap-0.xml",
    "/af93eb7ac3b2b7262c19ba0935d6b9bf.txt"
  ]
};
var routes2 = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes2.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes2.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-doPvmr/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-doPvmr/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=skn4kkq1rg.js.map
