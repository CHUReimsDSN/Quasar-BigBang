<script setup lang="ts">
import { QCard } from 'quasar';
import { computed } from 'vue';

// consts
const bindCard = {
    class: "flex column q-mt-sm",
    style: "gap: 8px;",
};

// refs
const showCard = defineModel({ default: false })

// computeds
const cardComponent = computed(() => {
    return showCard.value ? QCard : "div";
});
const bindSeparator = computed(() => {
    if (showCard.value) {
        return {
            style: 'margin-top: 20px; background: transparent !important;'
        };
    }
    return {
        class: "q-ma-lg full-width",
        style: 'margin-top: 30px;'
    };
})
</script>

<template>
    <component v-bind="bindCard" :is="cardComponent">
        <slot></slot>
    </component>
    <q-separator v-bind="bindSeparator" />
</template>