module.exports = {
  content: ['./app.vue', './error.vue', './components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './node_modules/flowbite/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        // primary: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
        primary: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      transitionProperty: {
        width: 'width',
      },
      textDecoration: ['active'],
      minWidth: {
        kanban: '28rem',
      },
    },
  },
  darkMode: 'class',
  safelist: ['w-64', 'w-1/2', 'rounded-l-lg', 'rounded-r-lg', 'bg-gray-200', 'grid-cols-4', 'grid-cols-7', 'h-6', 'leading-6', 'h-9', 'leading-9', 'shadow-lg'],
  plugins: [
    require('flowbite'),
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'aside-scrollbars': value => {
    //         const track = value === 'light' ? '100' : '900'
    //         const thumb = value === 'light' ? '300' : '600'
    //         const color = value === 'light' ? 'gray' : value

    //         return {
    //           scrollbarWidth: 'thin',
    //           scrollbarColor: `${theme(`colors.${color}.${thumb}`)} ${theme(`colors.${color}.${track}`)}`,
    //           '&::-webkit-scrollbar': {
    //             width: '8px',
    //             height: '8px',
    //           },
    //           '&::-webkit-scrollbar-track': {
    //             backgroundColor: theme(`colors.${color}.${track}`),
    //           },
    //           '&::-webkit-scrollbar-thumb': {
    //             borderRadius: '0.25rem',
    //             backgroundColor: theme(`colors.${color}.${thumb}`),
    //           },
    //         }
    //       },
    //     },
    //     { values: theme('asideScrollbars') }
    //   )
    // }),
  ],
}
