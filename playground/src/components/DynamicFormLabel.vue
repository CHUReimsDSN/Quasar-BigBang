<script setup lang="ts">
import { computed } from 'vue';

// props
const propsComponent = defineProps<{
    label?: string;
}>()

// refs
const showLabel = defineModel({ default: false })

// computeds
const computedProps = computed(() => {
    return {
        label: showLabel.value ? undefined : propsComponent.label
    }
})
</script>

<template>
    <div class="flex column">
        <template v-if="showLabel">
            <qbb-label :label="propsComponent.label" />
        </template>
        <slot name="props" v-bind="computedProps" />
    </div>
</template>
