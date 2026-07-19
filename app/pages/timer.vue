<script setup lang="ts">
const { phase, completedWorkSessions, durations, nextPhase } = usePomodoro();

function handleComplete() {
  nextPhase();
  changeDuration(durations.value[phase.value]);
}

const { remainingSeconds, isRunning, formattedTime, start, pause, stop, changeDuration } = useTimer(
  durations.value.work,
  handleComplete,
);

// Reset the display to the new duration when settings change while idle.
watch(
  () => durations.value[phase.value],
  (minutes) => {
    if (!isRunning.value) changeDuration(minutes);
  },
);

const phaseLabel = computed(() => {
  const map = { work: 'Focus', shortBreak: 'Short break', longBreak: 'Long break' };
  return map[phase.value];
});

const totalSeconds = computed(() => durations.value[phase.value] * 60);

const progress = computed(() => {
  const total = totalSeconds.value;
  if (!total) return 0;
  return (total - remainingSeconds.value) / total;
});

const { totalFocusMinutes, sessionsUntilLongBreak } = useStats(completedWorkSessions, durations.value.work);

const isFullScreen = ref(false);
async function toggleFullScreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }
}
function syncFullscreen() {
  isFullScreen.value = !!document.fullscreenElement;
}

onMounted(() => document.addEventListener('fullscreenchange', syncFullscreen));
onUnmounted(() => document.removeEventListener('fullscreenchange', syncFullscreen));
</script>

<template>
  <main class="timer">
    <div class="ring" :style="{ '--deg': progress * 360 + 'deg' }">
      <div class="ring-inner">
        <p class="phase">{{ phaseLabel }}</p>
        <div class="time">{{ formattedTime }}</div>
      </div>
    </div>

    <div class="controls">
      <button v-if="!isRunning" class="btn btn--primary" @click="start">Start</button>
      <button v-else class="btn" @click="pause">Pause</button>
      <button class="btn btn--ghost" @click="stop">Reset</button>
      <button class="btn btn--ghost" @click="toggleFullScreen">
        {{ isFullScreen ? 'Exit full screen' : 'Full screen' }}
      </button>
    </div>

    <div class="stats">
      <div class="stat">
        <span class="stat-value">{{ totalFocusMinutes }}</span>
        <span class="stat-label">min focused</span>
      </div>
      <div class="stat">
        <span class="stat-value">{{ sessionsUntilLongBreak }}</span>
        <span class="stat-label">until long break</span>
      </div>
    </div>
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
.ring {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(var(--accent) var(--deg), var(--track) var(--deg));
  display: grid;
  place-items: center;
  transition: background 0.3s linear;
}
.ring-inner {
  width: 264px;
  height: 264px;
  border-radius: 50%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}
.phase {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.time {
  font-size: 72px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
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
.stats {
  display: flex;
  gap: var(--space-5);
  margin-top: var(--space-2);
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: var(--ink);
}
.stat-label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
