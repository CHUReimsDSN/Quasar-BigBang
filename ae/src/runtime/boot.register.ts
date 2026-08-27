import { defineBoot } from "#q-app";
import { BigBangTheme } from "../core/big-bang-theme";
import { setupDefaultProps } from "../core/default-props";
import QBBLabel from "../components/QBBLabel.vue";
import QBBThemePicker from "../components/QBBThemePicker.vue";
import QBBTime from "../components/QBBTime.vue";
import { bigBangThemeKey } from "../core/inject-key";

export default defineBoot(async ({ app }) => {
  app.component("qbb-time", QBBTime);
  app.component("qbb-theme-picker", QBBThemePicker);
  app.component("qbb-label", QBBLabel);
  app.provide(bigBangThemeKey, new BigBangTheme());
  setupDefaultProps();
});
