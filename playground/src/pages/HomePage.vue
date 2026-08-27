<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import PageSection from '@/components/PageSection.vue';
import PageLayout from '@/layout/PageLayout.vue';
</script>

<template>
  <PageLayout title="Home">
    <PageSection subtitle="What is it?">
      <div>
        <i>Quasar BigBang</i>
        is a <b>free</b> Quasar extension that provides styles and utilities.
      </div>
    </PageSection>

    <PageSection subtitle="Why?">
      <div>
        As long-time users of the amazing <i>Quasar</i> framework, we've found that
        <i>Material Design</i>
        isn't always the best fit for the UI/UX of our internal apps.
      </div>
    </PageSection>

    <PageSection subtitle="How does it work?">
      <div>It's all about two style files, Quasar's default component props and a few additional components and CSS
        classes.
      </div>
      <div>With the default props, we can tweak the <b>default styling</b> of the components.</div>
      <div>This means that overriding or changing the props/styles that don't fit your needs will <b>still work</b>.
      </div>
      <div>Install the extension, imports the stylesheets and you're good to go.</div>
      <Banner type="secondary" style="max-width: 600px">
        <div>
          If you add this extension to an existing app, you may want to remove some of the
          already-set props to benefit from the theme's styling.
        </div>
      </Banner>
    </PageSection>

    <PageSection subtitle="Which version of Quasar is this based of?">
      <div>{{ $q.version }}</div>
    </PageSection>

    <PageSection subtitle="Any dependency in the layer?">
      <div>Nope.</div>
    </PageSection>

  </PageLayout>
</template>
