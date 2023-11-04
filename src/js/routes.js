import NotFoundPage from "../pages/404.svelte";

var routes = [
  {
    path: "/",
    asyncComponent: () => import("../pages/home.svelte"),
  },
  {
    path: "/about/",
    asyncComponent: () => import("../pages/about.svelte"),
  },
  {
    path: "/form/",
    asyncComponent: () => import("../pages/form.svelte"),
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    asyncComponent: () => import("../pages/dynamic-route.svelte"),
  },
  {
    path: "(.*)",
    asyncComponent: () => import("../pages/404.svelte"),
  },
];

export default routes;
