<script setup lang="ts">
import { shiki, shikiThemeDark, shikiThemeLight } from '@/utils/shiki';
import { Dark } from 'quasar';
import { type BundledLanguage } from 'shiki';
import { computed, onMounted, ref, watch } from 'vue';

// props
const propsComponent = defineProps<{
    code: string;
    lang: BundledLanguage;
}>()

// refs
const htmlCode = ref('')
const copyLabel = ref('Copy')

// functions
async function computedHtmlCode() {
    htmlCode.value = shiki.codeToHtml(propsComponent.code, {
        lang: propsComponent.lang,
        theme: shikiThemeByMode.value
    })
}
function copyCodeToClipboard() {
    navigator.clipboard.writeText(propsComponent.code)
    copyLabel.value = 'Copied!'
    setTimeout(() => {
        copyLabel.value = 'Copy'
    }, 3000)
}

// computeds
const shikiThemeByMode = computed(() => {
    return Dark.isActive ? shikiThemeDark : shikiThemeLight
})

// watchs
watch(() => Dark.isActive, () => {
    computedHtmlCode()
})

// lifeCycle
onMounted(() => {
    void computedHtmlCode()
})
</script>


<template>
    <div class="code-container">
        <div v-html="htmlCode" />
        <q-btn class="copy-btn" :label="copyLabel" color="secondary" @click="copyCodeToClipboard" />
    </div>
</template>


<style lang="sass">
.code-container
    display: flex
    border: 1px solid var(--field-border-color)
    border-radius: 6px

.shiki
    padding: 12px
    margin: 0px
</style>