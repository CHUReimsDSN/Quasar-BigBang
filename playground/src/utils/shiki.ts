import {
  createHighlighter,
  createJavaScriptRegexEngine,
  type BundledTheme,
} from "shiki";

export const shikiThemeLight: BundledTheme = "github-light-high-contrast";
export const shikiThemeDark: BundledTheme = "github-dark-high-contrast";
export const shiki = await createHighlighter({
  themes: [shikiThemeLight, shikiThemeDark],
  langs: [
    "typescript",
    "bash",
    "vue",
    "vue-html",
    "javascript",
    "json",
    "css",
    "sass",
    "scss",
  ],
  engine: createJavaScriptRegexEngine(),
});
