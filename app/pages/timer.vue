<script setup lang="ts">
const { phase, completedWorkSessions, durations, nextPhase } = usePomodoro();

function handleComplete() {
  nextPhase();
  changeDuration(durations[phase.value]);
}

const { isRunning, formattedTime, start, pause, stop, changeDuration } = useTimer(durations.work, handleComplete);

// state → görünən mətn
const phaseLabel = computed(() => {
  const map = { work: 'Focus', shortBreak: 'Short break', longBreak: 'Long break' };
  return map[phase.value];
});
</script>

<template>
  <main class="timer">
    <p class="phase">{{ phaseLabel }}</p>

    <div class="time">{{ formattedTime }}</div>

    <div class="controls">
      <button v-if="!isRunning" class="btn btn--primary" @click="start">Start</button>
      <button v-else class="btn" @click="pause">Pause</button>
      <button class="btn btn--ghost" @click="stop">Reset</button>
    </div>

    <p class="meta">Session {{ completedWorkSessions + 1 }}</p>
  </main>
</template>

<style scoped>
.timer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  background: var(--bg);
  color: var(--ink);
}
.phase {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.time {
  font-size: 96px;
  font-weight: 600;
  font-variant-numeric: tabular-nums; /* rəqəmlər titrəmir */
  line-height: 1;
}
.controls {
  display: flex;
  gap: var(--space-2);
}
.btn {
  padding: 12px 28px;
  border-radius: var(--radius);
  border: 1px solid var(--line2);
  background: var(--surface);
  color: var(--ink);
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background: var(--hover);
}
.btn--primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.btn--ghost {
  background: transparent;
  color: var(--muted);
}
.meta {
  color: var(--faint);
  font-size: 13px;
  margin: 0;
}
</style>
