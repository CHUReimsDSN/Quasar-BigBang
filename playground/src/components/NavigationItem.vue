<script setup lang="ts">
import type { TRouteMenu } from '@/utils/routes-menu';
import { computed } from 'vue';

// Types
type TProps = {
  route: TRouteMenu;
  searchedRoute?: string | undefined;
};

// props
const props = defineProps<TProps>();

// computeds
const navRoutes = computed(() => {
  if (props.searchedRoute && props.route.children) {
    const regex = new RegExp(String.raw`.*${props.searchedRoute}.*`, 'i');
    return props.route.children.filter((r) => isRouteValid(r, regex));
  } else {
    return props.route.children;
  }
});

// functions
const isRouteValid = (route: TRouteMenu, regex: RegExp) => {
  if (regex.test(route.label ?? '')) {
    return true;
  }
  if (route.children) {
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
};
</script>

<template>
  <div>
    <q-expansion-item v-if="navRoutes" :default-opened="!!searchedRoute" :icon="route.icon ?? ''"
      :label="route.label ?? '???'" headerClass="menu-item" class="menu-expandable" group="groupAccordionMode">
      <NavigationItem v-for="(childRoute, i) in navRoutes" :key="i" :searched-route="searchedRoute"
        :route="childRoute" />
    </q-expansion-item>

    <q-item v-else clickable activeClass="menu-item-active" :active="route.active" class="menu-item" :to="route.to">
      <q-item-section v-if="route.icon" avatar>
        <q-icon :name="route.icon" />
      </q-item-section>

      <q-item-section>
        {{ route.label ?? '???' }}
      </q-item-section>
    </q-item>
  </div>
</template>
