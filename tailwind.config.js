

/** @type {import('tailwindcss').Config} */
export default {
  // Add the paths to all your components/template files here
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2" }],
        h2: ["40px", { lineHeight: "1.25" }],
        h3: ["32px", { lineHeight: "1.25" }],
        h4: ["24px", { lineHeight: "1.3" }],
        body: ["16px", { lineHeight: "1.5" }],
        nav: ["16px", { lineHeight: "1.3" }],
        cta: ["16px", { lineHeight: "1.2" }],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#F59E0B",
        success: "#22C55E",
        danger: "#EF4444",
        neutral: {
          100: "#F9FAFB",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
        },
      },
    },
  },
  plugins: [
    // Include daisyUI here
    require('daisyui'),
  ],
  // Optional: daisyUI theme configuration
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4F46E5",
          secondary: "#F59E0B",
          accent: "#22C55E",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          "--rounded-btn": "0.5rem",
          "--btn-text-case": "uppercase",
        },
      },
    ],
    darkTheme: "dark",
  },
}



