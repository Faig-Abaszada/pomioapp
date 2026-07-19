export function usePomodoro() {
  const settings = useSettings();
  const phase = ref<'work' | 'shortBreak' | 'longBreak'>('work');
  const completedWorkSessions = ref(0);

  const durations = computed(() => ({
    work: settings.value.focusMinutes,
    shortBreak: settings.value.breakMinutes,
    longBreak: settings.value.longBreakMinutes,
  }));

  function nextPhase() {
    if (phase.value === 'work') {
      completedWorkSessions.value++;
      phase.value = completedWorkSessions.value % 4 === 0 ? 'longBreak' : 'shortBreak';
    } else {
      phase.value = 'work';
    }
  }

  return { phase, completedWorkSessions, durations, nextPhase };
}
