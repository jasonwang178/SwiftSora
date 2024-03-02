export const setDarkMode = (payload = null) => {
  const appConfig = useAppConfig()
  const { darkModeKey } = appConfig
  const darkMode = useDarkMode()

  darkMode.value = payload !== null ? payload : !darkMode.value

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(darkModeKey, darkMode.value ? '1' : '0')
  }

  if (typeof document !== 'undefined') {
    document.body.classList[darkMode.value ? 'add' : 'remove']('dark')
    document.documentElement.classList[darkMode.value ? 'add' : 'remove']('dark')
  }
}

export const initTheme = () => {
  const { darkModeKey } = useAppConfig()
  if (localStorage.getItem(darkModeKey) === '1' || (!(darkModeKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    setDarkMode(true)
  } else {
    document.documentElement.classList.remove('dark')
    setDarkMode(false)
  }
}
