<script setup lang="ts">
import PageRouter from '@/components/PageRouter.vue';
import PageSectionMenu from '@/components/PageSectionMenu.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

// props
const propsComponent = withDefaults(defineProps<{
    title: string;
    showSectionMenu?: boolean;
}>(), {
    showSectionMenu: true
})

// consts
const route = useRoute()

// functions
/**
 * Because of the fixed header :<
 */
function scrollToAnchor() {
    const element = document.getElementById(route.fullPath.split('#').at(1) ?? '__unkown')
    if (!element) {
        return
    }
    window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'instant'
    })
}

// lifeCycle
onMounted(() => {
    setTimeout(() => {
        if (route.fullPath.includes('#')) {
            scrollToAnchor();
        }
    })
})
</script>

<template>
    <div class="page-layout">
        <div class="flex column items-start">
            <page-section-menu v-if="propsComponent.showSectionMenu && $q.screen.gt.sm" />
            <h2>{{ propsComponent.title }}</h2>
            <slot></slot>
            <page-router class="q-pb-xl q-mb-xl q-pt-md" />
        </div>
    </div>
</template>
