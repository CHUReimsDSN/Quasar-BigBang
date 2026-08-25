export type TRouteMenu = {
  to?: Record<string, unknown> & { name: string };
  label?: string;
  icon?: string;
  children?: TRouteMenu[];
  active?: boolean;
};

export const appRouteMenuItems: TRouteMenu[] = [
  {
    label: "Home",
    icon: "home",
    to: { name: "home" },
  },
  {
    label: "Installation",
    icon: "download",
    to: { name: "install" },
  },
  {
    label: "Kitchen sink",
    icon: "soup_kitchen",
    to: { name: "kitchen-sink" },
  },
  {
    label: "Default props",
    icon: "settings",
    to: { name: "default-props" },
  },
  {
    label: "Components",
    icon: "dashboard",
    children: [],
  },
  {
    label: "Utils",
    icon: "build",
    children: [
      {
        label: "CSS classes",
        icon: "style",
        to: { name: "utils-css-classes" },
      },
      {
        label: "Snippets",
        icon: "text_snippet",
        to: { name: "utils-snippets" },
      },
    ],
  },
  {
    label: "Big Bang API",
    icon: "rocket_launch",
    to: { name: "big-bang-api" },
  },
  {
    label: "Changelog",
    icon: "list",
    to: { name: "changelog" },
  },
  {
    label: "Help Quasar",
    icon: "favorite",
    to: { name: "help-quasar" },
  },
];
