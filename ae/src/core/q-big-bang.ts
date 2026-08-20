import { primaries, type TPrimaryLabel } from "./primary";
import { surfaces, type TSurfaceLabel } from "./surface";
import { Saver, TSaveStrategy } from "./saver";

export class QBigBang {
  private static _instance: QBigBang = new QBigBang();
  private _primary: TPrimaryLabel = 'Emerald'
  private _surface: TSurfaceLabel = 'Slate'
  private _saveStrategy: TSaveStrategy = 'local-storage'

  static setPrimary(primaryLabel: TPrimaryLabel) {
    const primary = primaries.get(primaryLabel);
    if (!primary) {
      return;
    }
    this._instance._primary = primaryLabel
    for (const entry of Object.entries(primary)) {
      document.documentElement.style.setProperty(
        `--primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
  }

  static getPrimary() {
    return this._instance._primary
  }

  static setSurface(surfaceLabel: TSurfaceLabel) {
    const surface = surfaces.get(surfaceLabel);
    if (!surface) {
      return;
    }
    this._instance._surface = surfaceLabel
    for (const entry of Object.entries(surface)) {
      document.documentElement.style.setProperty(
        `--surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
  }

  static getSurface() {
    return this._instance._surface
  }

  static setSaveMode(strategy: TSaveStrategy) {
    this._instance._saveStrategy = strategy
  }

  static trySaveTheme() {
    if (this._instance._saveStrategy === 'none') {
      return
    }
    Saver.save(this._instance._primary, this._instance._surface)
  }

  static tryLoadTheme() {
    if (this._instance._saveStrategy === 'none') {
      return
    }
    const themeData = Saver.load()
    this.setPrimary(themeData[0])
    this.setSurface(themeData[1])
  }

  static getSaveMode() {
    return this._instance._saveStrategy
  }

}
