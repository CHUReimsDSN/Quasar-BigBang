<script setup lang="ts">
import { useDebounce } from "@/utils/utils";
import { QTooltip } from "quasar";
import { nextTick, ref } from "vue";

// props
const propsComponent = defineProps<{
  message: string;
}>();

// consts
const debounce = useDebounce();

// refs
const tooltipRef = ref<InstanceType<typeof QTooltip>>();
const notifyTriggered = ref(false);
const state = ref(false);

// functions
function notify() {
  notifyTriggered.value = true;
  void nextTick(() => {
    tooltipRef.value?.show();
    debounce.debounce(() => {
      tooltipRef.value?.hide();
    }, 1000);
  });
}
function beforeShow() {
  if (!notifyTriggered.value) {
    state.value = false;
  }
}
function hide() {
  notifyTriggered.value = false;
}

// expose
defineExpose({
  notify,
});
</script>

<template>
  <q-tooltip
    ref="tooltipRef"
    v-model="state"
    @hide="hide"
    @beforeShow="beforeShow"
  >
    {{ propsComponent.message }}
  </q-tooltip>
</template>
