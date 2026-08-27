import { flattenRoutesMenu } from "@/utils/routes-menu";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  ...flattenRoutesMenu.map((menuItem) => {
    return {
      name: menuItem.to!["name"],
      path: "/" + menuItem.to!["name"],
      component: menuItem.component!,
    };
  }),
  {
    path: "/",
    name: "root",
    redirect: "home",
  },
  {
    path: "/:catchAll(.*)*",
    name: "error404",
    component: () => import("@/pages/errors/Error404Page.vue"),
  },
];

export default routes;
