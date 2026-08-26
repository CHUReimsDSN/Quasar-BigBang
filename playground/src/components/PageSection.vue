<script setup lang="ts">
import { ref } from "vue";
import TooltipNotify from "./TooltipNotify.vue";

// props
const propsComponent = defineProps<{
  subtitle?: string;
  card?: boolean;
}>();

// refs
const showAnchorBtn = ref(false);
const tooltipRef = ref<InstanceType<typeof TooltipNotify>>();

// functions
function copyAnchor() {
  navigator.clipboard.writeText(document.URL + "#" + propsComponent.subtitle);
  tooltipRef.value?.notify();
}
</script>

<template>
  <div class="flex column q-pb-xl q-mb-sm">
    <div
      v-if="propsComponent.subtitle"
      class="flex row no-wrap items-center"
      @mouseenter="showAnchorBtn = true"
      @mouseleave="showAnchorBtn = false"
    >
      <h4 :id="propsComponent.subtitle">
        {{ propsComponent.subtitle }}
      </h4>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        :duration="150"
      >
        <q-btn
          v-show="showAnchorBtn"
          label="#"
          class="no-focus-helper"
          @click="copyAnchor()"
        >
          <TooltipNotify ref="tooltipRef" message="Copied!" />
        </q-btn>
      </transition>
    </div>
    <div class="flex column items-start q-pl-sm">
      <template v-if="!propsComponent.card">
        <slot></slot>
      </template>
      <template v-else>
        <q-card>
          <slot></slot>
        </q-card>
      </template>
    </div>
  </div>
</template>
