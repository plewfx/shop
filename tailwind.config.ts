import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1024px',
        'sm': {'max': '640px'},
        'lg': {'max': '1024px'},
      },
      fontFamily: {
        integralCF: ["integralCF", 'sans-serif'],
      },
      colors: {
        'beige': "#F0EEED"
      }
    },
  },
  plugins: [],
}
export default config
