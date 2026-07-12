<script setup lang="ts">
// 🔬 DEMO — state machine test (sonra silinəcək)
const { phase, completedWorkSessions, nextPhase } = usePomodoro()

const { remainingSeconds, isRunning, formattedTime, start, pause, stop } = useTimer(0.1, nextPhase)
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
  </div>
</template>
