import { Notify } from "quasar";

Notify.setDefaults({
  position: "top-right",
  timeout: 3000,
  group: false,
});

function positive(message: string) {
  Notify.create({
    type: "positive",
    message: "Success",
    icon: "check",
    caption: message,
  });
}

function negative(message: string) {
  Notify.create({
    type: "negative",
    message: "Error",
    icon: "cancel",
    caption: message,
  });
}

function warning(message: string) {
  Notify.create({
    type: "warning",
    message: "Warning",
    icon: "warning",
    caption: message,
  });
}

function info(message: string) {
  Notify.create({
    type: "info",
    message: "Information",
    caption: message,
  });
}

function secondary(message: string) {
  Notify.create({
    type: "secondary",
    message: "Information",
    classes: "bg-secondary",
    icon: "info",
    caption: message,
  });
}

export const NotifyUtils = {
  positive,
  negative,
  warning,
  info,
  secondary,
};
