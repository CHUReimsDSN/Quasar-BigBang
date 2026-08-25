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
const bindSpace = computed(() => {
    if (showCard.value) {
        return {};
    }
    return {
        class: "q-ma-sm full-width",
    };
})
</script>

<template>
    <component v-bind="bindCard" :is="cardComponent">
        <slot></slot>
    </component>
    <div v-bind="bindSpace"></div>
</template>