<script setup lang="ts">
import { shiki, shikiThemeDark, shikiThemeLight } from "@/utils/shiki";
import { Dark } from "quasar";
import { type BundledLanguage } from "shiki";
import { computed, onMounted, ref, watch } from "vue";
import TooltipNotify from "./TooltipNotify.vue";

// props
const propsComponent = defineProps<{
  code: string;
  lang: BundledLanguage;
}>();

// refs
const htmlCode = ref("");
const tooltipRef = ref<InstanceType<typeof TooltipNotify>>();

// functions
async function computedHtmlCode() {
  htmlCode.value = shiki.codeToHtml(propsComponent.code, {
    lang: propsComponent.lang,
    theme: shikiThemeByMode.value,
  });
}
function copyCodeToClipboard() {
  navigator.clipboard.writeText(propsComponent.code);
  tooltipRef.value?.notify();
}

// computeds
const shikiThemeByMode = computed(() => {
  return Dark.isActive ? shikiThemeDark : shikiThemeLight;
});

// watchs
watch(
  () => Dark.isActive,
  () => {
    computedHtmlCode();
  },
);

// lifeCycle
onMounted(() => {
  void computedHtmlCode();
});
</script>

<template>
  <div class="code-container">
    <div v-html="htmlCode" />
    <div class="code-copy-container">
      <q-btn @click="copyCodeToClipboard" class="code-copy-btn">
        <q-icon size="1rem" name="content_copy" color="secondary" />
        <TooltipNotify ref="tooltipRef" message="Copied!" />
      </q-btn>
    </div>
  </div>
</template>

<style lang="sass">
.code-container
    position: relative
    display: flex
    border: 1px solid var(--field-border-color)
    border-radius: 6px

.code-copy-container
  position: absolute
  right: 0
  padding: 5px

.code-copy-btn
  i
    font-size: 1em !important

.shiki
    padding: 12px
    padding-right: 40px
    margin: 0px
</style>
