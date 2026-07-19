<script setup lang="ts">
const settings = useSettings();

useHead({
  htmlAttrs: {
    'data-theme': computed(() => settings.value.theme),
  },
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
