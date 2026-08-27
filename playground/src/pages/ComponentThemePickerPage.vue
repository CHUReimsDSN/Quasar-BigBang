<script setup lang="ts">
import CodeContainer from "@/components/CodeContainer.vue";
import PageSection from "@/components/PageSection.vue";
import TodoBanner from "@/components/TodoBanner.vue";
import PageLayout from "@/layout/PageLayout.vue";
import jsonApi from '@/../../ae/generated/components/QBBThemePicker.json'

// consts
const usageCode = `<qbb-theme-picker />`;
</script>

<template>
  <PageLayout title="Theme picker">
    <TodoBanner />
    <PageSection subtitle="Usage">
      <CodeContainer :code="usageCode" lang="vue" />
    </PageSection>

    <PageSection subtitle="Preview">
      <qbb-theme-picker />
    </PageSection>
  </PageLayout>
</template>
