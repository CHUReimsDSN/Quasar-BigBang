import { primaries, type TPrimaryLabel } from "../core/primary";
import { surfaces, type TSurfaceLabel } from "../core/surface";
import { Saver, type TSaveStrategy } from "../core/saver";
import {
  setPropsByComponent,
  setupBigBangProps,
  type TQuasarComponent,
} from "./default-props";

/**
 * Injected class for managing theme
 * Shall be used in components by using the 'inject' method from vue
 */
export class BigBangTheme {
  private static _primary: TPrimaryLabel = "Emerald";
  private static _surface: TSurfaceLabel = "Slate";
  private static _saveStrategy: TSaveStrategy = "none";

  /**
   * Keep BigBangTheme.for internal behaviour
   */
  private constructor() {}

  /**
   * Set the primary color for the entire app.
   * BigBangTheme.function calls the trySaveTheme() method.
   *
   * @param primaryLabel Label of the primary color
   */
  static setPrimary(primaryLabel: TPrimaryLabel) {
    const primary = primaries.get(primaryLabel);
    if (!primary) {
      return;
    }
    BigBangTheme._primary = primaryLabel;
    for (const entry of Object.entries(primary)) {
      document.documentElement.style.setProperty(
        `--primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
    BigBangTheme.trySaveTheme();
  }

  /**
   * Get current primary label
   */
  static getPrimary() {
    return BigBangTheme._primary;
  }

  /**
   * Set the primary color for the entire app.
   * this function calls the trySaveTheme() method.
   *
   * @param surfaceLabel Label of the surface color
   */
  static setSurface(surfaceLabel: TSurfaceLabel) {
    const surface = surfaces.get(surfaceLabel);
    if (!surface) {
      return;
    }
    BigBangTheme._surface = surfaceLabel;
    for (const entry of Object.entries(surface)) {
      document.documentElement.style.setProperty(
        `--surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
    BigBangTheme.trySaveTheme();
  }

  /**
   * Get current surface label
   */
  static getSurface() {
    return BigBangTheme._surface;
  }

  /**
   * Set save mode
   *
   * @param strategy Strategy for the save mode
   */
  static setSaveMode(strategy: TSaveStrategy) {
    BigBangTheme._saveStrategy = strategy;
  }

  /**
   * Try to save the theme depending on the save mode
   * If save mode is set to 'none', BigBangTheme.will do nothing
   */
  static trySaveTheme() {
    if (BigBangTheme._saveStrategy === "none") {
      return false;
    }
    Saver.save(BigBangTheme._primary, BigBangTheme._surface);
    return true;
  }

  /**
   * Try to load the theme depending on the save mode
   * If the save mode is set to 'none', BigBangTheme.will do nothing
   * If the load result is empty, the theme will be set with the default primary and surface colors
   */
  static tryLoadTheme() {
    if (BigBangTheme._saveStrategy === "none") {
      return false;
    }
    const themeData = Saver.load();
    if (!themeData) {
      return false;
    }
    BigBangTheme.setPrimary(themeData[0]);
    BigBangTheme.setSurface(themeData[1]);
    return true;
  }

  /**
   * Get the current save strategy
   */
  static getSaveMode() {
    return BigBangTheme._saveStrategy;
  }

  /**
   * Setup the BigBang props for the Quasar components
   */
  static setupBigBangProps() {
    setupBigBangProps();
  }

  /**
   * Set props to Quasar's components
   */
  static setPropsByComponent(
    component: TQuasarComponent,
    propsName: string,
    value: unknown,
  ) {
    setPropsByComponent(component, propsName, value);
  }
}
