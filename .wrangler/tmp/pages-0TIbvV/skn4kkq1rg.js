// <define:__ROUTES__>
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

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\X421\\proyectos\\babybookai-web\\.wrangler\\tmp\\pages-0TIbvV\\functionsWorker-0.8520150213517166.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\X421\\proyectos\\babybookai-web\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\X421\\proyectos\\babybookai-web\\.wrangler\\tmp\\pages-0TIbvV\\functionsWorker-0.8520150213517166.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=skn4kkq1rg.js.map
