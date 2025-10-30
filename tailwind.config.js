// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // Add the paths to all your components/template files here
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Include daisyUI here
    require('daisyui'),
  ],
  // Optional: daisyUI theme configuration
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: "dark",
  },
}