<script setup lang="ts">
import CodeContainer from '@/components/CodeContainer.vue';
import PageSection from '@/components/PageSection.vue';
import PageLayout from '@/layout/PageLayout.vue';

// consts
const allApi = Object.entries(
    import.meta.glob('@/../../ae/generated/definitions/*.ts', {
        query: '?raw',
        import: 'default',
        eager: true,
    })
).map((entry) => {
    return {
        title: entry[0].split('/').at(-1)?.replaceAll('.d.ts', '').split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('') ?? '??',
        content: entry[1]
    }
})
</script>

<template>
    <PageLayout title="API">
        <PageSection v-for="(api, index) of allApi" :key="index" :subtitle="api.title">
            <CodeContainer :code="api.content" lang="ts" />
        </PageSection>
    </PageLayout>
</template>