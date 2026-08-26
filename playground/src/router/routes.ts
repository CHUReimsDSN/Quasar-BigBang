import BigBangApiPage from "@/pages/BigBangApiPage.vue";
import ChangelogPage from "@/pages/ChangelogPage.vue";
import ComponentLabelPage from "@/pages/ComponentLabelPage.vue";
import ComponentThemePickerPage from "@/pages/ComponentThemePickerPage.vue";
import ComponentTimePage from "@/pages/ComponentTimePickerPage.vue";
import DefaultPropsPage from "@/pages/DefaultPropsPage.vue";
import EditThemePage from "@/pages/EditThemePage.vue";
import Error404Page from "@/pages/errors/Error404Page.vue";
import HelpQuasarPage from "@/pages/HelpQuasarPage.vue";
import HomePage from "@/pages/HomePage.vue";
import InstallPAge from "@/pages/InstallPage.vue";
import KitchenSinkPage from "@/pages/KitchenSinkPage.vue";
import UtilCssClassesPage from "@/pages/UtilCssClassesPage.vue";
import UtilSnippetsPage from "@/pages/UtilSnippetsPage.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/install",
    name: "install",
    component: InstallPAge,
  },
  {
    path: "/kitchen-sink",
    name: "kitchen-sink",
    component: KitchenSinkPage,
  },
    {
    path: "/edit-theme",
    name: "edit-theme",
    component: EditThemePage,
  },
  {
    path: "/default-props",
    name: "default-props",
    component: DefaultPropsPage,
  },
  {
    path: "/utils-css-classes",
    name: "utils-css-classes",
    component: UtilCssClassesPage,
  },
  {
    path: "/utils-snippets",
    name: "utils-snippets",
    component: UtilSnippetsPage,
  },

  {
    path: "/qbb-theme-picker",
    name: "qbb-theme-picker",
    component: ComponentThemePickerPage,
  },
    {
    path: "/qbb-time",
    name: "qbb-time",
    component: ComponentTimePage,
  },
    {
    path: "/qbb-label",
    name: "qbb-label",
    component: ComponentLabelPage,
  },

  {
    path: "/changelog",
    name: "changelog",
    component: ChangelogPage,
  },
  {
    path: "/big-bang-api",
    name: "big-bang-api",
    component: BigBangApiPage,
  },
  {
    path: "/help-quasar",
    name: "help-quasar",
    component: HelpQuasarPage,
  },
  {
    path: "/:catchAll(.*)*",
    name: "error404",
    component: Error404Page,
  },
];

export default routes;
