<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { appRouteMenuItems, type TRouteMenu } from "@/utils/routes-menu";
import NavigationItem from "./NavigationItem.vue";

// refs
const drawer = defineModel({ default: true });
const drawerWith = ref(0);
const searchedRoute = ref<string>();
const routes = ref<Readonly<TRouteMenu[]>>(appRouteMenuItems);

// computeds
const navRoutes = computed(() => {
  if (searchedRoute.value) {
    const regex = new RegExp(String.raw`.*${searchedRoute.value}.*`, "i");
    return routes.value.filter((r) => isRouteValid(r, regex));
  } else {
    return routes.value;
  }
});

// fonctions
function isRouteValid(route: TRouteMenu, regex: RegExp) {
  if (regex.test(route.label ?? "")) {
    return true;
  }
  if (route.children && route.children.length > 0) {
    const enfantsValides = [];
    route.children.forEach((child: TRouteMenu) => {
      if (isRouteValid(child, regex)) {
        enfantsValides.push(child);
      }
    });
    if (enfantsValides.length > 0) {
      return true;
    }
  }
  return false;
}
function computeDrawerWidth() {
  drawerWith.value = ((17.395 / 100) * window.innerWidth) + 120
}

// lifeCycle
onMounted(() => {
  window.addEventListener("resize", computeDrawerWidth);
  computeDrawerWidth()
});
onUnmounted(() => {
  window.removeEventListener("resize", computeDrawerWidth);
});
</script>

<template>
  <q-drawer v-model="drawer" :width="drawerWith">
    <q-list class="q-pa-md">
      <div v-if="$q.screen.gt.sm" class="flex q-pl-sm">
        <h1>Quasar BigBang</h1>
      </div>
      <div class="q-py-md q-px-sm flex flex-center">
        <q-input v-model="searchedRoute" clearable placeholder="Search">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <NavigationItem
        v-for="(route, i) in navRoutes"
        :key="i"
        :route="route"
        :searchedRoute="searchedRoute"
      />
    </q-list>
  </q-drawer>
</template>

<style lang="sass">
.q-drawer
  background-color: var(--page-background);
  padding-left: calc(17.395vw - 142.05px);
</style>
