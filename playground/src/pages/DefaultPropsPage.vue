<script setup lang="ts">
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";
import defaultProps from "@/../../ae/generated/default-props/default-props.json";
import CodeContainer from "@/components/CodeContainer.vue";

// consts
const usageCode = `// src/boot/big-bang.ts
import { BigBangTheme } from "quasar-app-extension-big-bang";

BigBangTheme.setPropsByComponent("btn", "color", "red");`;

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
    <PageSection subtitle="Change props">
      <div>You can change Quasar's components default props like this :</div>
      <br />
      <CodeContainer :code="usageCode" lang="ts" />
      <div>Below is all the props set by BigBang.</div>
    </PageSection>
    <PageSection
      v-for="entry of Object.entries(defaultProps)"
      :key="entry[0]"
      :subtitle="entry[0]"
    >
      <q-card>
        <q-list>
          <template
            v-for="subEntry of Object.entries(entry[1])"
            :key="subEntry[0]"
          >
            <div>
              - {{ subEntry[0] }}:
              <q-badge :label="formatPropValue(subEntry[1])" class="q-ml-sm" />
            </div>
          </template>
        </q-list>
      </q-card>
    </PageSection>
  </PageLayout>
</template>
