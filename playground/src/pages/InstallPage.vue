<script setup lang="ts">
import CodeContainer from '@/components/CodeContainer.vue';
import PageSection from '@/components/PageSection.vue';
import PageLayout from '@/layout/PageLayout.vue';

// const
const commandInstall = 'quasar ext add TODO'
const commandAddStyleVariable = `// inside src/css/quasar.variables.scss
@import 'quasar-app-extension-big-bang/src/css/big-bang-variables.scss';
`
const commandAddStyle = `// inside src/css/app.scss
@import 'quasar-app-extension-big-bang/src/css/big-bang.sass';
`
</script>

<template>
  <PageLayout title="Installation">
    <PageSection subtitle="Add the extension">
      <CodeContainer :code="commandInstall" lang="bash" />
    </PageSection>
    <PageSection subtitle="Add the style and variables">
      <CodeContainer :code="commandAddStyleVariable" lang="scss" />
      <CodeContainer :code="commandAddStyle" lang="scss" />
    </PageSection>
  </PageLayout>
</template>
