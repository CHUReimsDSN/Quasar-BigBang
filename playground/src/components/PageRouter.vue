<script setup lang="ts">
import { flattenRoutesMenu, type TRouteMenu } from '@/utils/routes-menu';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// consts
const route = useRoute()

// refs
const previousRoute = ref<TRouteMenu | null>(null)
const nextRoute = ref<TRouteMenu | null>(null)

// functions
function setupNextAndPreviousRoute() {
    const index = flattenRoutesMenu.findIndex((routeMenu) => {
        return routeMenu.to?.name === route.name
    })
    if (index === -1) {
        return
    }
    if (index - 1 > -1) {
        const previousRouteFound = flattenRoutesMenu.at(index - 1)
        if (previousRouteFound) {
            previousRoute.value = previousRouteFound
        }
    }
    if (index + 1 < flattenRoutesMenu.length + 1) {
        const nextRouteFound = flattenRoutesMenu.at(index + 1)
        if (nextRouteFound) {
            nextRoute.value = nextRouteFound
        }
    }
}

// lifeCycle
onMounted(() => {
    setupNextAndPreviousRoute()
})
</script>

<template>
    <div class="flex row items-center q-gutter-md">
        <q-btn v-if="previousRoute && previousRoute.to" :to="{ name: previousRoute.to.name }"
            :label="`${previousRoute.prefixLabel ?? ''} ${previousRoute.label}`" icon="chevron_left"
            color="secondary" />
        <q-btn v-if="nextRoute && nextRoute.to" :to="{ name: nextRoute.to.name }"
            :label="`${nextRoute.prefixLabel ?? ''} ${nextRoute.label}`" color="secondary" icon-right="chevron_right" />
    </div>
</template>