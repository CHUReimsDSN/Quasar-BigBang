import "quasar";

declare module "quasar" {
  interface Notify {
    positive(message: string, options?: QNotifyCreateOptions): void;
    negative(message: string, options?: QNotifyCreateOptions): void;
    warning(message: string, options?: QNotifyCreateOptions): void;
    info(message: string, options?: QNotifyCreateOptions): void;
  }
}
