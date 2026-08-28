<script setup lang="ts">
import CodeContainer from "@/components/CodeContainer.vue";
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";
import jsonApi from "@/../../ae/generated/components/QBBLabel.json";
import { ref } from "vue";
import type { TComponentApi } from "quasar-app-extension-big-bang";
import ComponentJsonApi from "@/components/json-api/ComponentJsonApi.vue";

// consts
const usageCode = `<qbb-label />`;

// refs
const input = ref("");
</script>

<template>
  <PageLayout title="Label">
    <PageSection subtitle="API">
      <ComponentJsonApi :jsonApi="jsonApi as TComponentApi" />
    </PageSection>
    <PageSection subtitle="Usage">
      <CodeContainer :code="usageCode" lang="vue" />
    </PageSection>

    <PageSection subtitle="Preview">
      <qbb-label name="The label" />
      <q-input v-model="input" placeholder="I'm a separated q-input" />
    </PageSection>
  </PageLayout>
</template>
