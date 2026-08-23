<script setup lang="ts">
import { computed, ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

// types
export type TRoute = {
  label?: string;
  icon?: string;
  children?: TRoute[];
  active?: boolean;
};

// refs
const displayDrawer = ref(true);
const miniState = ref(true);
const overHeader = ref(true);
const searchedRoute = ref<string>();
const isWriting = ref(false);
const routes = ref<TRoute[]>([
  {
    label: "Dashboard",
    icon: "dashboard",
    active: true,
  },
  {
    label: "Users",
    icon: "person",
  },
  {
    label: "Issues",
    icon: "bug_report",
  },
  {
    label: "Data",
    icon: "bar_chart",
    children: [
      { label: "Charts" },
      {
        label: "Tree",
      },
    ],
  },
  {
    label: "Settings",
    icon: "settings",
    children: [
      {
        label: "General",
        icon: "construction",
      },
      {
        label: "Members",
        icon: "group",
      },
      {
        label: "Notifications",
        icon: "notifications",
      },
      {
        label: "Security",
        icon: "lock",
      },
    ],
  },
]);

// Computeds
const navRoutes = computed(() => {
  if (searchedRoute.value) {
    const regex = new RegExp(String.raw`.*${searchedRoute.value}.*`, "i");
    return routes.value.filter((r) => isRouteValid(r, regex));
  } else {
    return routes.value;
  }
});

// Fonctions
const isRouteValid = (route: TRoute, regex: RegExp) => {
  if (regex.test(route.label ?? "")) {
    return true;
  }
  if (route.children && route.children.length > 0) {
    const enfantsValides = [];
    route.children.forEach((child: TRoute) => {
      if (isRouteValid(child, regex)) {
        enfantsValides.push(child);
      }
    });
    if (enfantsValides.length > 0) {
      return true;
    }
  }
  return false;
};
</script>

<template>
  <q-drawer v-model="displayDrawer" :mini="miniState && !overHeader && !isWriting" :mini-to-overlay="!overHeader"
    noMiniAnimation @mouseenter="miniState = false" @mouseleave="miniState = true"
    :class="{ 'hide-scrollbar': miniState }" :width="250">
    <q-list class="q-pa-md">
      <q-item>
        <q-item-section avatar>
          <q-icon name="home" class="cursor-pointer" />
        </q-item-section>

        <q-item-section>
          <q-space />
        </q-item-section>

        <q-item-section side>
          <q-icon :name="overHeader ? 'mdi-pin-off' : 'mdi-pin'" :color="overHeader ? 'primary' : ''"
            class="cursor-pointer" @click="overHeader = !overHeader" />
        </q-item-section>
      </q-item>

      <div class="q-py-md q-px-sm flex flex-center">
        <q-input v-if="!miniState || overHeader || isWriting" v-model="searchedRoute" clearable placeholder="Search"
          @blur="() => (isWriting = false)" @focus="() => (isWriting = true)">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-icon v-else name="search" class="menu-item" />
      </div>

      <NavigationItem v-for="(route, i) in navRoutes" :key="i" :route="route" :searchedRoute="searchedRoute" />
    </q-list>
  </q-drawer>
</template>
