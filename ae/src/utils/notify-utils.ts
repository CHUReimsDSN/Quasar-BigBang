import { Notify, type QNotifyCreateOptions } from "quasar";

export class NotifyUtils {
  private static defaultOptions: Partial<QNotifyCreateOptions> = {
    position: "top-right",
    timeout: 3000,
    group: false,
  };
  static extends() {
    if (!Notify) {
      return;
    }

    Notify.positive = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "positive",
        message: "Success",
        icon: "check",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };

    Notify.negative = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "negative",
        message: "Error",
        icon: "cancel",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };

    Notify.warning = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "warning",
        message: "Warning",
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

    Notify.secondary = (message: string, options?: QNotifyCreateOptions) => {
      Notify.create({
        type: "secondary",
        message: "Information",
        classes: "bg-secondary",
        icon: "info",
        caption: message,
        ...NotifyUtils.defaultOptions,
        ...options,
      });
    };
  }
}
