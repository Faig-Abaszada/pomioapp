<script setup lang="ts">
const settings = useSettings()
</script>

<template>
  <main>
    <h1>Settings</h1>
    <p>Theme: {{ settings.theme }}</p>
    <p>Focus: {{ settings.focusMinutes }} min</p>
    <p>Break: {{ settings.breakMinutes }} min</p>
  </main>
</template>
