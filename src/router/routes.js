const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "settings",
        component: () => import("src/pages/SettingsPage.vue"),
      },
      {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
      },
      {
        path: "tray",
        component: () => import("src/pages/TrayMenu.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
