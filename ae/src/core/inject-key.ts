import type { InjectionKey } from "vue";
import type { BigBangTheme } from "./big-bang-theme";

export const bigBangThemeKey: InjectionKey<BigBangTheme> =
  Symbol.for('quasar-app-extension-big-bang:bigBangTheme');