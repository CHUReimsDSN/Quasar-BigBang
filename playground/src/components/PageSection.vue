<script setup lang="ts">
// props
const propsComponent = defineProps<{
    subtitle?: string;
}>()
</script>

<template>
    <div class="flex column q-py-md">
        <h4 v-if="propsComponent.subtitle">{{ propsComponent.subtitle }}</h4>
        <div class="flex column items-start q-pl-sm">
            <slot></slot>
        </div>
    </div>
</template>
