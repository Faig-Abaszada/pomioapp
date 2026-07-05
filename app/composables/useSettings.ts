export function useSettings() {
    const settings = useState('settings', () => ({
        theme: 'dark',
        focusMinutes: 25,
        breakMinutes: 5,
    }))

    return settings
}