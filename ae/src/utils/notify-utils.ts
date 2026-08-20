import { Notify, type QNotifyCreateOptions } from "quasar";

export class NotifyUtils {
  private static defaultOptions: Partial<QNotifyCreateOptions> = {
    position: "top-right",
    timeout: 3000,
    group: false,
  };
  static extends() {
    if (!Notify) {
      return
    }

    Notify.positive = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "positive",
        message: "Succès",
        icon: "check",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };

    Notify.negative = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "negative",
        message: "Erreur",
        icon: "cancel",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };

    Notify.warning = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "warning",
        message: "Avertissement",
        icon: "warning",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };

    Notify.info = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "info",
        message: "Information",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };
  }
}
