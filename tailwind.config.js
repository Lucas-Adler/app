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
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      secondary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a'
      }
    },
    boxShadow: {
      md: '5px 5px 0px 0px rgb(0 0 0 / 1), 0 0 0 0 rgb(0 0 0 / 1)',
      lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      gr: '5px 5px 0px 0px rgb(0 0 0 / .5), 0 0 0 0 rgb(0 0 0 / .5)'
    }
  },
  plugins: []
}
