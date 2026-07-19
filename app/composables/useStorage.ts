export function useStorage(key: string, defaultValue: string) {
  const value = ref(defaultValue);

  onMounted(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) value.value = stored;
  });

  watch(value, (newValue) => {
    localStorage.setItem(key, newValue);
  });

  return value;
}
