<script setup lang="ts">
import { ref } from "vue";
import { primaries, type TPrimaryLabel } from "../core/primary";
import { QBigBang } from "../core/q-big-bang";
import { surfaces, TSurfaceLabel } from "../core/surface";

// refs
const selectedPrimary = ref(QBigBang.getPrimary());
const selectedSurface = ref(QBigBang.getSurface());

// functions
function setPrimary(label: TPrimaryLabel) {
  QBigBang.setPrimary(label);
  selectedPrimary.value = label;
}
function setSurface(label: TSurfaceLabel) {
  QBigBang.setSurface(label);
  selectedSurface.value = label;
}
</script>

<template>
  <div class="theme-preview-container">
    <div class="flex column">
      <div class="flex column q-gutter-y-sm">
        <div class="text-h4 text-grey">Primary</div>
        <div class="flex row items-center">
          <div
            v-for="primary of primaries"
            :key="primary[0]"
            :class="`theme-selector ${selectedPrimary === primary[0] ? 'theme-selector-active' : ''}`"
            name="circle"
            :style="`background: ${primary[1].reference}`"
            @click="setPrimary(primary[0])"
          >
            <q-tooltip>{{ primary[0] }}</q-tooltip>
          </div>
        </div>
      </div>
      <div class="flex column q-gutter-y-sm q-pt-lg">
        <div class="text-h4 text-grey">Surface</div>
        <div class="flex row items-center">
          <div
            v-for="surface of surfaces"
            :key="surface[0]"
            :class="`theme-selector ${selectedSurface === surface[0] ? 'theme-selector-active' : ''}`"
            name="circle"
            :style="`background: ${surface[1].reference}`"
            @click="setSurface(surface[0])"
          >
            <q-tooltip>{{ surface[0] }}</q-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.theme-preview-container
  display: flex
  flex-direction: column
  width: 14vw
  padding: 4px

.theme-selector
  position: relative
  border-radius: 50%
  border: 2px solid var(--card-background)
  height: 20px
  width: 20px
  margin: 4px
  cursor: pointer
  &-active
    &:after
      content: ""
      position: absolute
      border-radius: 50%
      inset: -4px
      border: 2px solid var(--primary-color)
</style>
