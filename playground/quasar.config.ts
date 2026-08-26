// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app";
import { generateDefaultPropsFile } from "./generator/default-props-generator";

export default defineConfig((/* ctx */) => ({
  boot: [],
  css: ["app.scss"],
  extras: [
    "roboto-font", // optional, you are not bound to it
    "material-icons", // optional, you are not bound to it
    "mdi-v7",
  ],

  framework: {
    config: {
      dark: "auto",
    },
    plugins: ["Notify"],
  },
  animations: ["fadeIn", "fadeOut"],

  build: {
    filenameBasedRouting: true,
    vueRouterMode: "history",
    typescript: {
      strict: true,
      vueShim: true,
    },
    vitePlugins: [
      {
        name: 'generate-default-props-doc-file',
        buildStart() {
          generateDefaultPropsFile()
        }
      }
    ]
  },

  devServer: {
    open: true,
  },
}));
