import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0df259",
        "background-light": "#303030ff",
        "background-dark": "#102216",
        "deep-dark": "#111813",
        "surface-dark": "#1a2c20",
        "muted-green": "#9cbaa6",
        "accent-green": "#3b5443",
        "border-green": "#28392e",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
}
