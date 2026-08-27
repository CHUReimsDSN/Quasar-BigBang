<script setup lang="ts">
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";
import defaultProps from '@/../../ae/generated/default-props/default-props.json'

// functions
function formatPropValue(value: unknown) {
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return String(value);
}
</script>

<template>
  <PageLayout title="Default props">
    <PageSection v-for="entry of Object.entries(defaultProps)" :key="entry[0]" :subtitle="entry[0]">
      <q-list>
        <template v-for="subEntry of Object.entries(entry[1])" :key="subEntry[0]">
          <div>
            - {{ subEntry[0] }}:
            <q-badge :label="formatPropValue(subEntry[1])" class="q-ml-sm" />
          </div>
        </template>
      </q-list>
    </PageSection>
  </PageLayout>
</template>
