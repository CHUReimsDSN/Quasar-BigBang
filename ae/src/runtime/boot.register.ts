import { defineBoot } from "#q-app";
import QBBThemePreview from "../components/QBBThemePreview.vue";
import QBBTime from "../components/QBBTime.vue";

export default defineBoot(async ({ app }) => {
  app.component("qbb-time", QBBTime);
  app.component("qbb-theme-preview", QBBThemePreview);
});
