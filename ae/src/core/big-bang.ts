import { primaries, TPrimaryEntry, TPrimaryLabel } from "./primary";
import { surfaces, TSurfaceEntry, TSurfaceLabel } from "./surface";

export class BigBang {
  private static _instance: BigBang = new BigBang();
  private _primary: TPrimaryEntry | undefined = primaries.get("Emerald");
  private _surface: TSurfaceEntry | undefined = surfaces.get("Zinc");

  private constructor() {}

  static setPrimary(primaryLabel: TPrimaryLabel) {
    this._instance._primary = primaries.get(primaryLabel);
    if (!this._instance._primary) {
      return;
    }
    for (const entry of Object.entries(this._instance._primary)) {
      document.documentElement.style.setProperty(
        `--p-primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
  }

  static setSurface(surfaceLabel: TSurfaceLabel) {
    this._instance._surface = surfaces.get(surfaceLabel);
    if (!this._instance._surface) {
      return;
    }
    for (const entry of Object.entries(this._instance._surface)) {
      document.documentElement.style.setProperty(
        `--p-surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
  }
}
