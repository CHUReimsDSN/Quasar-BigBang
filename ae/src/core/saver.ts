import type { TPrimaryLabel } from "./primary";
import type { TSurfaceLabel } from "./surface";

export type TSaveStrategy = "none" | "local-storage" | "cookie";

export class Saver {
  static save(primaryLabel: TPrimaryLabel, surfaceLabel: TSurfaceLabel) {
    // TODO
  }

  static load(): [TPrimaryLabel, TSurfaceLabel] {
    return ["Emerald", 'Slate'] // TODO
  }

  private constructor() {}
}
