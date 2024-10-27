/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./templates/**/*.{html,js,ts,jsx,tsx}",
    "./parts/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/vogelvlug-design-system/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        default: "var(--text-default)",
        title: "var(--text-title)",
        subtitle: "var(--text-subtitle)",
        overtitle: "var(--text-overtitle)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        caption: "var(--text-caption)",
      },
      backgroundColor: {
        default: "var(--background-default)",
        subtle: "var(--background-subtle)",
      },
    },
  },
  plugins: [],
}

