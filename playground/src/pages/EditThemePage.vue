<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import CodeContainer from "@/components/CodeContainer.vue";
import LinkHighlight from "@/components/LinkHighlight.vue";
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";

// consts
const usageCode = `// src/boot/big-bang.ts
import { BigBangTheme } from "quasar-app-extension-big-bang";

BigBangTheme.setSaveMode("local-storage");
BigBangTheme.tryLoadTheme();`
const saveAndSetCode = `bigBang?.setSaveMode("local-storage");
bigBang?.tryLoadTheme();`
const cssPrimaryVariableCode = `// default primary palette is 'Emerald'
--primary-50: #ecfdf5;
--primary-100: #d1fae5;
--primary-200: #a7f3d0;
--primary-300: #6ee7b7;
--primary-400: #34d399;
--primary-500: #10b981;
--primary-600: #059669;
--primary-700: #047857;
--primary-800: #065f46;
--primary-900: #064e3b;
--primary-950: #022c22;`;
const cssSurfaceVariableCode = `// default surface palette is 'Slate'
--surface-0: #ffffff;
--surface-50: #f8fafc;
--surface-100: #f1f5f9;
--surface-200: #e2e8f0;
--surface-300: #cbd5e1;
--surface-400: #94a3b8;
--surface-500: #64748b;
--surface-600: #475569;
--surface-700: #334155;
--surface-800: #1e293b;
--surface-900: #0f172a;
--surface-950: #020617;`;
const cssAltVariablesCode = `:root {
  --positive-color: #42c360;
  --positive-hover-color: #45d366;
  --positive-background-alt-color: #e9fcec;

  --negative-color: #f53e36;
  --negative-hover-color: #ff4f43;
  --negative-background-alt-color: #fceae7;

  --warning-color: #fa8328;
  --warning-hover-color: #ff8020;
  --warning-background-alt-color: #fdf1e7;

  --info-color: #24a4e8;
  --info-hover-color: #28aef7;
  --info-background-alt-color: #e8f6fd;
}

body.body--dark {
  --positive-color: #3ed984;
  --positive-hover-color: #3cb157;
  --positive-background-alt-color: #2d6c3466;

  --negative-color: #f34b46;
  --negative-hover-color: #eb382b;
  --negative-background-alt-color: #8a200f66;

  --warning-color: #f7861d;
  --warning-hover-color: #ec7f19;
  --warning-background-alt-color: #8e4d0b66;

  --info-color: #52a1fe;
  --info-hover-color: #4a94e9;
  --info-background-alt-color: #115c8866;
}`;
const secondaryVariableCode = `:root {
  --secondary-color: var(--surface-200);
  --secondary-text-color: var(--surface-600);
  --secondary-hover-color: var(--surface-200);
  --secondary-hover-text-color: var(--surface-700);
}

body.body--dark {
  --secondary-color: var(--surface-800);
  --secondary-text-color: var(--surface-300);
  --secondary-hover-color: var(--surface-800);
  --secondary-hover-text-color: var(--surface-200);
}`;
</script>

<template>
  <PageLayout title="Edit theme">
    <PageSection subtitle="Usage">
      <div>The BigBangTheme static class lives within the application.</div>
      <div>It provides an API to set primary and surface colors and</div>
      <div> can save configuration to the browser's local storage for autoloading preferences.</div>
      <br />
      <CodeContainer :code="usageCode" lang="ts" />
      <br />
      <div>You can set a save mode and try to load the stored theme.</div>
      <CodeContainer :code="saveAndSetCode" lang="ts" />
      <div>
        You can check all the available methods in the
        <LinkHighlight :to="{ name: 'api' }" label="API" /> section.
      </div>
    </PageSection>

    <PageSection subtitle="Primary color">
      <div>
        If you want to hardcode primary colors, you can directly edit these CSS
        variables.
      </div>
      <CodeContainer :code="cssPrimaryVariableCode" lang="scss" />
      <Banner type="secondary">
        <div>The Big Bang API change these at runtime.</div>
        <div>
          You may want to hardcode them but then never use the
          <LinkHighlight :to="{ name: 'qbb-theme-picker' }" label="QBBThemePicker" />.
        </div>
      </Banner>
    </PageSection>

    <PageSection subtitle="Surface color">
      <div>Same as primary but for surface colors.</div>
      <CodeContainer :code="cssSurfaceVariableCode" lang="scss" />
    </PageSection>

    <PageSection subtitle="Alternate color">
      <CodeContainer :code="cssAltVariablesCode" lang="scss" />
    </PageSection>

    <PageSection subtitle="Secondary color">
      <div>Secondary color is based on the surface colors by default.</div>
      <CodeContainer :code="secondaryVariableCode" lang="scss" />
    </PageSection>
  </PageLayout>
</template>
