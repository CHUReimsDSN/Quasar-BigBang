<script setup lang="ts">
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import { Dark } from "quasar";
import { ref } from "vue";
import { useRoute } from "vue-router";

// consts
const route = useRoute();

// refs
const drawer = ref(true);
</script>

<template>
  <q-layout>
    <q-header :bordered="$q.screen.lt.md">
      <q-toolbar class="app-layout-toolbar">
        <div
          class="flex row items-center justify-between full-width"
          style="padding: 0 calc(17.395vw - 142.05px)"
        >
          <div class="flex row items-center">
            <div v-if="$q.screen.lt.md" class="flex q-pl-sm">
              <h1>Quasar BigBang</h1>
            </div>
          </div>
          <div class="flex row items-center q-gutter-x-md">
            <q-icon
              :name="Dark.isActive ? 'light_mode' : 'dark_mode'"
              class="cursor-pointer"
              @click="Dark.toggle()"
            />
            <q-icon class="cursor-pointer" name="palette">
              <q-popup-proxy>
                <qbb-theme-picker />
              </q-popup-proxy>
            </q-icon>
            <q-btn
              v-if="$q.screen.lt.md"
              @click="drawer = !drawer"
              icon="menu"
            />
          </div>
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <NavigationDrawer v-model="drawer" />

    <q-page-container class="GPL__page-container flex row">
      <q-page class="column full-width">
        <router-view :key="route.path" v-slot="{ Component }">
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.app-layout-toolbar {
  height: 50px;
}
</style>
