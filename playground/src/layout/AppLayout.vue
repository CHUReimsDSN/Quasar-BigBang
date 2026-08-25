<script setup lang="ts">
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import { Dark } from "quasar";
import { ref } from "vue";
import { useRoute } from "vue-router";

// consts
const route = useRoute()

// refs
const drawer = ref(true)
</script>

<template>
    <q-layout>
        <q-header>
            <q-toolbar class="GPL__toolbar" style="height: 54px">
                <div class="flex row items-center justify-between full-width">
                    <div class="flex row items-center">
                        <q-btn v-if="$q.screen.lt.md" @click="drawer = !drawer" icon="menu" />
                        <h1>Quasar BigBang</h1>
                    </div>
                    <div class="flex row items-center q-gutter-x-md">
                        <q-icon :name="Dark.isActive ? 'light_mode' : 'dark_mode'" class="cursor-pointer"
                            @click="Dark.toggle()" />
                        <q-icon class="cursor-pointer" name="palette">
                            <q-popup-proxy>
                                <qbb-theme-picker />
                            </q-popup-proxy>
                        </q-icon>
                    </div>
                </div>
                <q-space />
            </q-toolbar>
        </q-header>

        <NavigationDrawer v-model="drawer" />

        <q-page-container class="GPL__page-container">
            <q-page class="column q-px-lg q-pb-md">
                <router-view :key="route.path" v-slot="{ Component }">
                    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </q-page>
        </q-page-container>
    </q-layout>
</template>