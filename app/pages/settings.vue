<script setup lang="ts">
const settings = useSettings();

function toggleTheme() {
  settings.value.theme = settings.value.theme === 'light' ? 'dark' : 'light';
}
</script>

<template>
  <main class="settings">
    <h1>Settings</h1>

    <div class="row">
      <label for="focus">Focus (min)</label>
      <input id="focus" v-model.number="settings.focusMinutes" type="number" min="1" max="90" />
    </div>

    <div class="row">
      <label for="break">Short break (min)</label>
      <input id="break" v-model.number="settings.breakMinutes" type="number" min="1" max="30" />
    </div>

    <div class="row">
      <label for="longbreak">Long break (min)</label>
      <input id="longbreak" v-model.number="settings.longBreakMinutes" type="number" min="1" max="60" />
    </div>

    <div class="row">
      <span>Theme: {{ settings.theme }}</span>
      <button class="btn" @click="toggleTheme">Toggle</button>
    </div>
  </main>
</template>

<style scoped>
.settings {
  max-width: 420px;
  margin: 0 auto;
  padding: var(--space-5) var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: var(--ink);
}
h1 {
  margin: 0 0 var(--space-2);
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--surface);
  border: 1px solid var(--line2);
  border-radius: var(--radius);
}
label,
span {
  color: var(--muted);
  font-size: 15px;
}
input {
  width: 80px;
  padding: 8px 10px;
  border: 1px solid var(--line2);
  border-radius: 8px;
  background: var(--field);
  color: var(--ink);
  font-size: 15px;
  text-align: center;
}
.btn {
  padding: 8px 18px;
  border-radius: var(--radius);
  border: 1px solid var(--line2);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
}
.btn:hover {
  background: var(--hover);
}
</style>
