import { defineBoot } from "#q-app";
import { BigBang } from "../core/big-bang";
import QBBLabel from "../components/QBBLabel.vue";
import QBBThemePicker from "../components/QBBThemePicker.vue";
import QBBTime from "../components/QBBTime.vue";
import { setupDefaultProps } from "../core/default-props";

export default defineBoot(async ({ app }) => {
  app.component("qbb-time", QBBTime);
  app.component("qbb-theme-picker", QBBThemePicker);
  app.component("qbb-label", QBBLabel);
  app.provide("bigBang", BigBang);
  setupDefaultProps();
});
