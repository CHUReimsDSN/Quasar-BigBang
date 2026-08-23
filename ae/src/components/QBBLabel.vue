<script setup lang="ts">
// props
const propsComponents = defineProps<{
  label?: string;
}>()
</script>

<template>
  <div style="font-weight: 500; padding: 4px 0;">
    <slot>{{ propsComponents.label }}</slot>
  </div>
</template>
