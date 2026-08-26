<script setup lang="ts">
import { type RouteLocationRaw } from "vue-router";

// props
const propsComponent = defineProps<{
  label: string;
  to: Record<string, unknown> & { name: string };
}>();
</script>

<template>
  <router-link
    :to="(propsComponent.to as RouteLocationRaw)"
    class="link-highlight"
    >{{ propsComponent.label }}</router-link
  >
</template>

<style>
.link-highlight {
  color: var(--primary-color);
  &:visited {
    color: var(--primary-color);
  }
  &:hover {
    color: var(--primary-hover-color);
  }
}
</style>
