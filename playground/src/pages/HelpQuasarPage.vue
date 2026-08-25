<script setup lang="ts">
import PageSection from '@/components/PageSection.vue';
import PageLayout from '@/layout/PageLayout.vue';

</script>

<template>
    <PageLayout title="Help Quasar">
        <PageSection subtitle="">
            <div>
                If you appreciate the work that went into this, please consider donating to Quasar.
            </div>
            <q-btn href="https://donate.quasar.dev" target="_blank" color="info" class="q-mt-md"
                label="Donate to Quasar" />
        </PageSection>
    </PageLayout>
</template>
