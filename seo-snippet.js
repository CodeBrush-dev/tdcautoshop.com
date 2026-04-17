// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.tdcautoshop.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.tdcautoshop.com/","title_tag":"Automotive service & brake repairs | TDC Auto services","meta_description":"Trusted automotive service in Pennsauken for oil changes, tire service, brake repairs, engine diagnostics, and car safety checks. Book online and see our auto promotions."},{"page_url":"https://www.tdcautoshop.com/deals","title_tag":"Auto promotions & oil changes deals | TDC Auto services","meta_description":"Save on oil changes, tire service, and vehicle maintenance with exclusive auto promotions at TDC Auto. Limited-time discounts—call or visit to schedule your service."},{"page_url":"https://www.tdcautoshop.com/about-4","title_tag":"Vehicle maintenance & tire service | TDC Auto services","meta_description":"Learn the TDC Auto story and our commitment to quality vehicle maintenance, oil changes, and tire service. Enjoy convenient online booking and trusted local care."},{"page_url":"https://www.tdcautoshop.com/contact-7","title_tag":"Automotive service & online booking | TDC Auto services","meta_description":"Contact TDC Auto in Pennsauken for automotive service, oil changes, tire service, and brake repairs. Use our online booking tool or call to schedule vehicle maintenance."},{"page_url":"https://www.tdcautoshop.com/blog","title_tag":"Vehicle maintenance & car safety checks | TDC Auto","meta_description":"Read the TDC Auto blog for expert tips on vehicle maintenance, car safety checks, winter prep, oil changes, tire care, and brake repairs to keep your car running safely."},{"page_url":"https://www.tdcautoshop.com/blank","title_tag":"Automotive service privacy policy | TDC Auto services","meta_description":"Read the TDC Auto privacy policy to learn how we protect your information when you use our automotive service, vehicle maintenance, and car safety check services."},{"page_url":"https://www.tdcautoshop.com/blank-2","title_tag":"Automotive service terms & conditions | TDC Auto","meta_description":"Review TDC Auto terms and conditions for automotive service, oil changes, tire service, brake repairs, engine diagnostics, and vehicle maintenance in Pennsauken, NJ."},{"page_url":"https://www.tdcautoshop.com/blank-1","title_tag":"Accessible automotive service | TDC Auto services","meta_description":"Read the TDC Auto accessibility statement. We strive to make our automotive service, vehicle maintenance, and car safety checks accessible to all customers."}],"keywords":["Automotive service","Oil changes","Tire service","Brake repairs","Engine diagnostics","Vehicle maintenance","Auto promotions","TDC Auto services","Online booking","Car safety checks"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.tdcautoshop.com/#autoshop",
  "name": "TDC Auto",
  "url": "https://www.tdcautoshop.com/",
  "description": "TDC Auto is your trusted automotive service provider in Pennsauken, NJ, offering oil changes, tire service, brake repairs, and engine diagnostics. Our skilled technicians are dedicated to ensuring your vehicle performs optimally and maintaining your vehicle's safety.",
  "image": [
    "https://static.wixstatic.com/media/175847_f714c59a26bc483fa83d497c45f6b115~mv2.jpg/v1/fill/w_98,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/175847_f714c59a26bc483fa83d497c45f6b115~mv2.jpg",
    "https://static.wixstatic.com/media/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg",
    "https://static.wixstatic.com/media/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg",
    "https://static.wixstatic.com/media/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/175847_f714c59a26bc483fa83d497c45f6b115%7Emv2.jpg"
  ],
  "telephone": "+1-856-663-0460",
  "email": "office@tdcautoshop.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6508 Westfield Ave",
    "addressLocality": "Pennsauken",
    "addressRegion": "NJ",
    "postalCode": "08110",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6508 Westfield Ave",
      "addressLocality": "Pennsauken",
      "addressRegion": "NJ",
      "postalCode": "08110",
      "addressCountry": "US"
    }
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Pennsauken"
  },
  "sameAs": [],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "serviceType": [
    "Oil change",
    "Tire service",
    "Brake repairs",
    "Engine diagnostics",
    "General vehicle maintenance"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Full Synthetic Oil Change",
      "description": "1 Full Synthetic Oil change for just $59.99 (up to six quarts with standard filter; some premium filters extra)",
      "price": "59.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/LimitedAvailability",
      "category": "Service",
      "url": "https://www.tdcautoshop.com/deals"
    },
    {
      "@type": "Offer",
      "name": "Package of 5 Oil Changes",
      "description": "Package of 5 oil changes for only $249 (up to six quarts with standard filter; some premium filters extra)",
      "price": "249.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/LimitedAvailability",
      "category": "Service",
      "url": "https://www.tdcautoshop.com/deals"
    },
    {
      "@type": "Offer",
      "name": "Winter Special Battery Check",
      "description": "Winter special: Free battery check with any service",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/LimitedAvailability",
      "category": "Service",
      "url": "https://www.tdcautoshop.com/deals"
    },
    {
      "@type": "Offer",
      "name": "One-Time 10% Discount on Any Service",
      "description": "One-time 10% discount on any service",
      "availability": "https://schema.org/LimitedAvailability",
      "category": "Service",
      "url": "https://www.tdcautoshop.com/deals"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Exclusive Deals",
    "url": "https://www.tdcautoshop.com/deals",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Full Synthetic Oil Change",
        "description": "1 Full Synthetic Oil change for just $59.99 (up to six quarts with standard filter; some premium filters extra)",
        "price": "59.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/LimitedAvailability",
        "category": "Service",
        "url": "https://www.tdcautoshop.com/deals"
      },
      {
        "@type": "Offer",
        "name": "Package of 5 Oil Changes",
        "description": "Package of 5 oil changes for only $249 (up to six quarts with standard filter; some premium filters extra)",
        "price": "249.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/LimitedAvailability",
        "category": "Service",
        "url": "https://www.tdcautoshop.com/deals"
      },
      {
        "@type": "Offer",
        "name": "Winter Special Battery Check",
        "description": "Winter special: Free battery check with any service",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/LimitedAvailability",
        "category": "Service",
        "url": "https://www.tdcautoshop.com/deals"
      },
      {
        "@type": "Offer",
        "name": "One-Time 10% Discount on Any Service",
        "description": "One-time 10% discount on any service",
        "availability": "https://schema.org/LimitedAvailability",
        "category": "Service",
        "url": "https://www.tdcautoshop.com/deals"
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
