<script setup lang="ts">
import PageRouter from "@/components/PageRouter.vue";
import PageSectionMenu from "@/components/PageSectionMenu.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// props
const propsComponent = withDefaults(
  defineProps<{
    title: string;
    showSectionMenu?: boolean;
  }>(),
  {
    showSectionMenu: true,
  },
);

// consts
const route = useRoute();

// functions
/**
 * Because of the fixed header :<
 */
function scrollToAnchor() {
  const element = document.getElementById(
    route.fullPath.split("#").at(1) ?? "__unkown",
  );
  if (!element) {
    return;
  }
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 80,
    behavior: "instant",
  });
}

// lifeCycle
onMounted(() => {
  setTimeout(() => {
    if (route.fullPath.includes("#")) {
      scrollToAnchor();
    }
  });
});
</script>

<template>
  <div class="page-layout">
    <div class="page-container">
      <h2>{{ propsComponent.title }}</h2>
      <slot></slot>
      <page-router class="q-pb-xl q-mb-xl q-pt-md" />
    </div>
    <page-section-menu
      v-if="propsComponent.showSectionMenu && $q.screen.gt.sm"
    />
  </div>
</template>

<style lang="sass">
.page-layout
    width: 100%
    display: flex
    flex-direction: row
    justify-content: space-around
    padding-right: calc(17.395vw - 142.05px);

.page-container
    display: flex
    flex-direction: column
    width: 100%
    padding: 0 6rem
</style>
