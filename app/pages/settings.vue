<script setup lang="ts">
const settings = useSettings()

function toggleTheme() {
  settings.value.theme = settings.value.theme === 'light' ? 'dark' : 'light'
}

</script>

<template>
  <main>
    <h1>Settings</h1>
    <p>Theme: {{ settings.theme }}</p>
    <p>Focus: {{ settings.focusMinutes }} min</p>
    <p>Break: {{ settings.breakMinutes }} min</p>
      <button @click="toggleTheme">Toggle theme</button>
  </main>
</template>
