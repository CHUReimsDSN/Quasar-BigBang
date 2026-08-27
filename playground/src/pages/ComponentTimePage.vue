<script setup lang="ts">
import CodeContainer from "@/components/CodeContainer.vue";
import PageSection from "@/components/PageSection.vue";
import TodoBanner from "@/components/TodoBanner.vue";
import PageLayout from "@/layout/PageLayout.vue";
import { ref } from "vue";
import jsonApi from '@/../../ae/generated/components/QBBTime.json'

// consts
const usageCode = `<qbb-time />`;

// refs
const time = ref("");
</script>

<template>
  <PageLayout title="Time">
    <TodoBanner />
    <PageSection subtitle="Usage">
      <CodeContainer :code="usageCode" lang="vue" />
    </PageSection>

    <PageSection subtitle="Preview">
      <qbb-time v-model="time" />
    </PageSection>
  </PageLayout>
</template>
