<script setup lang="ts">
// props
const propsComponent = defineProps<{
    type: 'positive' | 'negative' | 'warning' | 'info';
}>()

// functions
function getBannerClass() {
    return `bg-${propsComponent.type} q-my-md`
}
function getIconByType() {
    const iconByTypes: Record<typeof propsComponent.type, string> = {
        'info': 'info',
        'negative': 'cancel',
        'positive': 'check',
        'warning': 'warning'
    }
    return iconByTypes[propsComponent.type]
}
</script>

<template>
    <q-banner :class="getBannerClass()">
        <div class="flex row no-wrap items-center">
            <q-icon :name="getIconByType()" :color="propsComponent.type" class="q-pr-md" />
            <div>
                <slot></slot>
            </div>
        </div>
    </q-banner>
</template>
