import { defineBoot } from "#q-app";
import { NotifyUtils } from "../utils/notify-utils.js";

export default defineBoot(async ({}) => {
  NotifyUtils.extends();
});
