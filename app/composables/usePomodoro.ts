export function usePomodoro() {
  const phase = ref<'work' | 'shortBreak' | 'longBreak'>('work')
  const completedWorkSessions = ref(0)

  const durations = {
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  }

  function nextPhase() {
    if (phase.value === 'work') {
      completedWorkSessions.value++
      phase.value = completedWorkSessions.value % 4 === 0 ? 'longBreak' : 'shortBreak'
    } else {
      phase.value = 'work'
    }
  }

  return { phase, completedWorkSessions, durations, nextPhase }
}
