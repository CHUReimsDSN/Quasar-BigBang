import { primaries, type TPrimaryLabel } from "../core/primary";
import { surfaces, type TSurfaceLabel } from "../core/surface";
import { Saver, type TSaveStrategy } from "../core/saver";

/**
 * Injected class for managing theme
 * Shall be used in components by using the 'inject' method from vue
 */
export class BigBangTheme {
  private _primary: TPrimaryLabel;
  private _surface: TSurfaceLabel;
  private _saveStrategy: TSaveStrategy;

  /**
   * Don't instanciate outside of the extension
   */
  constructor() {
    this._primary = "Emerald";
    this._surface = "Slate";
    this._saveStrategy = "none";
  }

  /**
   * Set the primary color for the entire app.
   * This function calls the trySaveTheme() method.
   *
   * @param primaryLabel Label of the primary color
   */
  setPrimary(primaryLabel: TPrimaryLabel) {
    const primary = primaries.get(primaryLabel);
    if (!primary) {
      return;
    }
    this._primary = primaryLabel;
    for (const entry of Object.entries(primary)) {
      document.documentElement.style.setProperty(
        `--primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
    this.trySaveTheme();
  }

  /**
   * Get current primary label
   */
  getPrimary() {
    return this._primary;
  }

  /**
   * Set the primary color for the entire app.
   * This function calls the trySaveTheme() method.
   *
   * @param surfaceLabel Label of the surface color
   */
  setSurface(surfaceLabel: TSurfaceLabel) {
    const surface = surfaces.get(surfaceLabel);
    if (!surface) {
      return;
    }
    this._surface = surfaceLabel;
    for (const entry of Object.entries(surface)) {
      document.documentElement.style.setProperty(
        `--surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
    this.trySaveTheme();
  }

  /**
   * Get current surface label
   */
  getSurface() {
    return this._surface;
  }

  /**
   * Set save mode
   *
   * @param strategy Strategy for the save mode
   */
  setSaveMode(strategy: TSaveStrategy) {
    this._saveStrategy = strategy;
  }

  /**
   * Try to save the theme depending on the save mode
   * If save mode is set to 'none', this will do nothing
   */
  trySaveTheme() {
    if (this._saveStrategy === "none") {
      return false;
    }
    Saver.save(this._primary, this._surface);
    return true;
  }

  /**
   * Try to load the theme depending on the save mode
   * If the save mode is set to 'none', this will do nothing
   * If the load result is empty, the theme will be set with the default primary and surface colors
   */
  tryLoadTheme() {
    if (this._saveStrategy === "none") {
      return false;
    }
    const themeData = Saver.load();
    this.setPrimary(themeData[0]);
    this.setSurface(themeData[1]);
    return true;
  }

  /**
   * Get the current save strategy
   */
  getSaveMode() {
    return this._saveStrategy;
  }
}
