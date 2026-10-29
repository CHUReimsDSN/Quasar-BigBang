import { LocalStorage } from "quasar";
import type { TPrimaryLabel } from "./primary";
import type { TSurfaceLabel } from "./surface";

export type TSaveStrategy = "none" | "local-storage";

export class Saver {
  private static keyName = "quasar-big-bang-theme";
  private static serializerSeparator = "|";

  static save(primaryLabel: TPrimaryLabel, surfaceLabel: TSurfaceLabel) {
    LocalStorage.setItem(
      this.keyName,
      `${primaryLabel}${this.serializerSeparator}${surfaceLabel}`,
    );
  }

  static load(): [TPrimaryLabel, TSurfaceLabel] | undefined {
    return LocalStorage.getItem(this.keyName)
      ?.toString()
      ?.split(this.serializerSeparator) as [TPrimaryLabel, TSurfaceLabel];
  }

  private constructor() {}
}
