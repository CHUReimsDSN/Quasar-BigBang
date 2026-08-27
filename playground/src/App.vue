<script setup lang="ts">
import { inject } from 'vue';
import AppLayout from './layout/AppLayout.vue';
import { bigBangThemeKey } from "quasar-app-extension-big-bang"

const bigBang = inject(bigBangThemeKey);
bigBang?.setSaveMode("local-storage");
bigBang?.tryLoadTheme();
</script>

<template>
  <AppLayout />
</template>
