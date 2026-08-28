<script setup lang="ts">
import { ref } from "vue";

// props
const propsComponent = withDefaults(defineProps<{
  descr: string;
  titleOnly?: boolean;
}>(), {
  titleOnly: false
});

// refs
const opened = ref(false);
</script>

<template>
  <div class="flex column">
    <div class="flex row item-center q-gutter-sm justify-between">
      <div>{{ propsComponent.descr }}</div>
      <q-btn
        v-if="!propsComponent.titleOnly"
        :icon="opened ? 'remove' : 'add'"
        @click="opened = !opened"
        style="min-height: 1.5em; width: 1.5em"
      />
    </div>
    <template v-if="opened">
      <slot></slot>
    </template>
  </div>
</template>
