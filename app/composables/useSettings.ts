const STORAGE_KEY = 'pomio-settings';

export function useSettings() {
  const settings = useState('settings', () => ({
    theme: 'dark',
    focusMinutes: 25,
    breakMinutes: 5,
    longBreakMinutes: 15,
  }));

  onMounted(() => {
    const storedSettings = localStorage.getItem(STORAGE_KEY);
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);
      Object.assign(settings.value, parsedSettings);
    }
  });

  watch(
    settings,
    (newValue) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
    },
    { deep: true },
  );

  return settings;
}
