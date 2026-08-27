<script setup lang="ts">
import CodeContainer from "@/components/CodeContainer.vue";
import PageSection from "@/components/PageSection.vue";
import TodoBanner from "@/components/TodoBanner.vue";
import PageLayout from "@/layout/PageLayout.vue";
import jsonApi from '@/../../ae/generated/components/QBBLabel.json'
import { ref } from "vue";

// consts
const usageCode = `<qbb-label />`;

// refs
const input = ref("");
</script>

<template>
  <PageLayout title="Label">
    <TodoBanner />
    <PageSection subtitle="Usage">
      <CodeContainer :code="usageCode" lang="vue" />
    </PageSection>

    <PageSection subtitle="Preview">
      <qbb-label label="Name" />
      <q-input v-model="input" placeholder="I'm a separated q-input" />
    </PageSection>
  </PageLayout>
</template>
