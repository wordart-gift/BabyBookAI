import { onRequestGet as __get___path___ts_onRequestGet } from "C:\\Users\\X421\\proyectos\\babybookai-web\\functions\\get\\[[path]].ts"
import { onRequest as ___middleware_ts_onRequest } from "C:\\Users\\X421\\proyectos\\babybookai-web\\functions\\_middleware.ts"

export const routes = [
    {
      routePath: "/get/:path*",
      mountPath: "/get",
      method: "GET",
      middlewares: [],
      modules: [__get___path___ts_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_ts_onRequest],
      modules: [],
    },
  ]