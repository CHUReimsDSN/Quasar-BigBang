<script setup lang="ts">
import PageRouter from '@/components/PageRouter.vue';

// props
const propsComponent = defineProps<{
    title: string;
}>()
</script>

<template>
    <div>
        <div class="flex column items-start">
            <h2>{{ propsComponent.title }}</h2>
            <slot></slot>
            <page-router class="q-pb-xl q-mb-xl q-pt-md" />
        </div>
    </div>
</template>
