export function useStats(completedWorkSessions: Ref<number>, workDurationMinutes: number) {
  // Total focus minutes = completed work sessions × work duration.
  const totalFocusMinutes = computed(() => completedWorkSessions.value * workDurationMinutes);

  // Work sessions left until the next long break (every 4th session).
  const sessionsUntilLongBreak = computed(() => 4 - (completedWorkSessions.value % 4));

  return { totalFocusMinutes, sessionsUntilLongBreak };
}
