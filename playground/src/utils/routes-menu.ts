import type { RouteRecordRaw } from "vue-router";

export type TRouteMenu = {
  to?: Record<string, unknown> & { name: string };
  label?: string;
  prefixLabel?: string;
  icon?: string;
  children?: TRouteMenu[];
  active?: boolean;
  component?: RouteRecordRaw["component"];
};

export const appRouteMenuItems: Readonly<TRouteMenu[]> = Object.freeze([
  {
    label: "Home",
    icon: "home",
    to: { name: "home" },
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    label: "Installation",
    icon: "download",
    to: { name: "install" },
    component: () => import("@/pages/InstallPage.vue"),
  },
  {
    label: "Kitchen sink",
    icon: "soup_kitchen",
    to: { name: "kitchen-sink" },
    component: () => import("@/pages/KitchenSinkPage.vue"),
  },
  {
    label: "Edit theme",
    icon: "style",
    to: { name: "edit-theme" },
    component: () => import("@/pages/EditThemePage.vue"),
  },
  {
    label: "Default props",
    icon: "settings",
    to: { name: "default-props" },
    component: () => import("@/pages/DefaultPropsPage.vue"),
  },
  {
    label: "Components",
    icon: "dashboard",
    children: [
      {
        label: "Theme picker",
        icon: "colorize",
        to: { name: "qbb-theme-picker" },
        component: () => import("@/pages/ComponentThemePickerPage.vue"),
      },
      {
        label: "Time",
        icon: "access_time",
        to: { name: "qbb-time" },
        component: () => import("@/pages/ComponentTimePage.vue"),
      },
      {
        label: "Label",
        icon: "label",
        to: { name: "qbb-label" },
        component: () => import("@/pages/ComponentLabelPage.vue"),
      },
    ],
  },
  {
    label: "Utils",
    icon: "build",
    children: [
      {
        label: "Added CSS classes",
        icon: "add",
        to: { name: "utils-css-classes" },
        component: () => import("@/pages/UtilCssClassesPage.vue"),
      },
      {
        label: "Snippets",
        icon: "text_snippet",
        to: { name: "utils-snippets" },
        component: () => import("@/pages/UtilSnippetsPage.vue"),
      },
    ],
  },
  {
    label: "API",
    icon: "hive",
    to: { name: "api" },
    component: () => import("@/pages/APIPage.vue"),
  },
  {
    label: "Changelog",
    icon: "list",
    to: { name: "changelog" },
    component: () => import("@/pages/ChangelogPage.vue"),
  },
  {
    label: "Help Quasar",
    icon: "favorite",
    to: { name: "help-quasar" },
    component: () => import("@/pages/HelpQuasarPage.vue"),
  },
]);

const flatCallback = (
  menuList: Readonly<TRouteMenu[]>,
  parentLabel?: string,
) => {
  return menuList.reduce(
    (acc, routeMenu) => {
      if (routeMenu.to) {
        if (parentLabel) {
          routeMenu.prefixLabel = parentLabel;
        }
        acc.push(routeMenu);
      }
      if (routeMenu.children) {
        acc = acc.concat(flatCallback(routeMenu.children, routeMenu.label));
      }
      return acc;
    },
    <TRouteMenu[]>[],
  );
};
export const flattenRoutesMenu = flatCallback(appRouteMenuItems);
