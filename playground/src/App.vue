<script setup lang="ts">
import { inject } from 'vue';
import AppLayout from './layout/AppLayout.vue';
const bigBang = inject("bigBang");
bigBang.setSaveMode("local-storage");
bigBang.tryLoadTheme();
</script>

<template>
  <AppLayout />
</template>
