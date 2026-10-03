/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Content/Contato.jsx',
    './src/Content/eficiedu.jsx',
    './src/Content/Home.jsx',
    './src/Content/Navbar.jsx',
    './src/Content/RoadMap.jsx',
    './src/App.jsx',
    './src/index.html',
    './src/**/*.jsx'
  ],
  darkMode:"class",
  theme: {
    extend: {},
    fontFamily: {
      clashRegular: ['ClashDisplay-Regular'],
      clashSemi: ['ClashDisplay-Semibold'],
      clashBold: ['ClashDisplay-Bold'],
      display: ['DM Sans', 'Inter', 'monospace'],
      body: ['DM Sans', 'Inter', 'monospace']
    },
    colors: {
      primary: {
  50:  '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#6366F1',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#312E81',
},
secondary: {
  50:  '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#CBD5E1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
},
accent: {
        50:  '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#1c4b8f',
        400: '',
        500: '',
        600: '',
        700: '',
        800: '',
        900: ''
      },
      data: {
        50:  '#fdf6e3',
        100: '#faedc4',
        200: '#fbdd90',
        300: '#fabd2f',
        400: '#d79921',
        500: '#b57614',
        600: '#9c650f',
        700: '#79500c',
        800: '#5c3d09',
        900: '#3d2806'
      }
      // primary: {
      //   50: '#f9fafb',
      //   100: '#f3f4f6',
      //   200: '#e5e7eb',
      //   300: '#d1d5db',
      //   400: '#9ca3af',
      //   500: '#6b7280',
      //   600: '#4b5563',
      //   700: '#374151',
      //   800: '#1f2937',
      //   900: '#111827'
      // },
      // secondary: {
      //   50: '#f0fdfa',
      //   100: '#ccfbf1',
      //   200: '#99f6e4',
      //   300: '#5eead4',
      //   400: '#2dd4bf',
      //   500: '#14b8a6',
      //   600: '#0d9488',
      //   700: '#0f766e',
      //   800: '#115e59',
      //   900: '#134e4a'
      // }
    },
    boxShadow: {
      sm: '5px 5px 0px 0px rgb(0 0 0 / 1), 0 0 0 0 rgb(0 0 0 / 1)',
      md: '5px 5px 0px 0px rgb(0 0 0 / 1), 0 0 0 0 rgb(0 0 0 / 1)',
      lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      gr: '5px 5px 0px 0px rgb(0 0 0 / .5), 0 0 0 0 rgb(0 0 0 / .5)'
    }
  },
  plugins: []
}
