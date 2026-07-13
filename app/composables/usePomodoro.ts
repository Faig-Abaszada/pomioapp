export function usePomodoro() {
  const phase = ref<'work' | 'shortBreak' | 'longBreak'>('work')
  const completedWorkSessions = ref(0)

  const durations = {
    work: 10 / 60, // 10 san
    shortBreak: 2 / 60, // 2 san
    longBreak: 5 / 60, // 5 san
  };

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
