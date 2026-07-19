<script setup lang="ts">
useSeoMeta({
  title: 'POMIO — Master your focus',
  description: 'Focus you can measure. Progress you can see. A simple focus timer with real stats.',
});

const { data: quote } = await useFetch('https://dummyjson.com/quotes/random');
</script>

<template>
  <main class="landing">
    <NuxtLink to="/settings" class="settings-link">Settings</NuxtLink>

    <div class="hero">
      <h1>Master your focus.</h1>
      <p class="subtitle">Focus you can measure. Progress you can see.</p>
      <NuxtLink to="/timer" class="cta">Start focusing →</NuxtLink>
      <p v-if="quote" class="quote">"{{ quote.quote }}" — {{ quote.author }}</p>
    </div>
  </main>
</template>

<style scoped>
.landing {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--bg);
  color: var(--ink);
  position: relative;
  padding: var(--space-4);
}
.settings-link {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
}
.settings-link:hover {
  color: var(--ink);
}
.hero {
  max-width: 560px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}
h1 {
  font-size: 56px;
  font-weight: 700;
  margin: 0;
  line-height: 1.05;
}
.subtitle {
  font-size: 18px;
  color: var(--muted);
  margin: 0;
}
.cta {
  margin-top: var(--space-2);
  padding: 14px 32px;
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
}
.cta:hover {
  opacity: 0.92;
}
.quote {
  margin-top: var(--space-4);
  font-style: italic;
  color: var(--faint);
  font-size: 14px;
  max-width: 420px;
}
</style>
