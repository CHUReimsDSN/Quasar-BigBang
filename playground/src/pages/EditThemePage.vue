<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import CodeContainer from "@/components/CodeContainer.vue";
import LinkHighlight from "@/components/LinkHighlight.vue";
import PageSection from "@/components/PageSection.vue";
import PageLayout from "@/layout/PageLayout.vue";

// consts
const cssPrimaryVariableCode = `--primary-50: #fff;
--primary-100: #fff;
--primary-200: #fff;
--primary-300: #fff;
--primary-400: #fff;
--primary-500: #fff;
--primary-600: #fff;
--primary-700: #fff;
--primary-800: #fff;
--primary-900: #fff;
--primary-950: #fff;`;
const cssSurfaceVariableCode = `--surface-0: #fff;
--surface-50: #fff;
--surface-100: #fff;
--surface-200: #fff;
--surface-300: #fff;
--surface-400: #fff;
--surface-500: #fff;
--surface-600: #fff;
--surface-700: #fff;
--surface-800: #fff;
--surface-900: #fff;
--surface-950: #fff;`;
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
          <LinkHighlight
            :to="{ name: 'qbb-theme-picker' }"
            label="QBBThemePicker"
          />
          /
          <LinkHighlight :to="{ name: 'big-bang-api' }" label="Big Bang API" />.
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
