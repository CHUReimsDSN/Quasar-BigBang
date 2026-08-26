<script setup lang="ts">
import PageSection from '@/components/PageSection.vue';
import PageLayout from '@/layout/PageLayout.vue';
import { changelogs } from '@/utils/changelogs';
</script>

<template>
    <PageLayout title="Changelog">
            <PageSection v-for="changelog of changelogs" :key="changelog.version" :subtitle="changelog.version">
                <div class="flex column">
                    <div v-for="change of changelog.changes" :key="change">
                        - {{ change }}
                    </div>
                    <div class="flex column q-pt-sm">
                        <div v-if="changelog.caption" class="text-caption">{{ changelog.caption }}</div>
                        <div class="text-italic text-caption">{{ changelog.date }}</div>
                    </div>
                </div>
            </PageSection>
    </PageLayout>
</template>
