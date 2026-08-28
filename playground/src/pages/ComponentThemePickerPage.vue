<script setup lang="ts">
import CodeContainer from "@/components/CodeContainer.vue";
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";
import jsonApi from "@/../../ae/generated/components/QBBThemePicker.json";
import ComponentJsonApi from "@/components/json-api/ComponentJsonApi.vue";
import type { TComponentApi } from "quasar-app-extension-big-bang";

// consts
const usageCode = `<qbb-theme-picker />`;
</script>

<template>
  <PageLayout title="Theme picker">
    <PageSection subtitle="API">
      <ComponentJsonApi :jsonApi="jsonApi as TComponentApi" />
    </PageSection>

    <PageSection subtitle="Usage">
      <CodeContainer :code="usageCode" lang="vue" />
    </PageSection>

    <PageSection subtitle="Preview">
      <qbb-theme-picker />
    </PageSection>
  </PageLayout>
</template>
