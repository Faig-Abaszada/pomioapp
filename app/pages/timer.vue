<script setup lang="ts">
// 🔬 DEMO — state machine test (sonra silinəcək)
const { phase, completedWorkSessions, nextPhase, durations } = usePomodoro()

function handleComplete() {
  // TODO 1: nextPhase() çağır — faza dəyişsin (work → shortBreak)
  // TODO 2: changeDuration(durations[phase.value]) — saatı yeni fazanın müddətinə qur
  nextPhase();
  changeDuration(durations[phase.value]);
}

const { remainingSeconds, isRunning, formattedTime, start, pause, stop, changeDuration } = useTimer(durations.work, handleComplete)

const { totalFocusMinutes, sessionsUntilLongBreak } = useStats(completedWorkSessions, durations.work)
</script>

<template>
  <div style="text-align:center; padding:40px; font-family:monospace">
    <h1 style="font-size:64px">{{ formattedTime }}</h1>
    <p>{{ isRunning ? 'işləyir' : 'dayanıb' }}</p>
    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="stop">Stop</button>

    <hr style="margin:32px 0">

    <!-- 🔬 state machine test -->
    <p style="font-size:24px">Faza: <b>{{ phase }}</b></p>
    <p>Bitən iş sessiyaları: {{ completedWorkSessions }}</p>
    <button @click="nextPhase" style="font-size:18px; padding:8px 16px">nextPhase →</button>

    <hr style="margin:32px 0">

    <!-- 🔬 Slice 5 — stats -->
    <p>Toplam fokus (dəq): <b>{{ totalFocusMinutes }}</b></p>
    <p>Uzun fasiləyə qalıb: <b>{{ sessionsUntilLongBreak }}</b> sessiya</p>
  </div>
</template>
