/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add your customizations here
      colors: {
        primary: "#10b981", // Emerald green
        secondary: "#6366f1", // Indigo
        orange: {
          100: "#ffedd5", // Light orange
          500: "#f59e0b", // Star yellow/orange
        },
        indigo: {
          100: "#e0e7ff", // Light indigo
          500: "#6366f1", // Indigo
        },
        green: {
          100: "#d1fae5", // Light green
          500: "#10b981", // Emerald green
        },
        blue: {
          100: "#dbeafe", // Light blue
          500: "#3b82f6", // Blue
        },
        yellow: {
          100: "#fef3c7", // Light yellow
          500: "#f59e0b", // Yellow
        },
        purple: {
          100: "#f3e8ff", // Light purple
          500: "#a855f7", // Purple
        },
        gray: {
          100: "#f3f4f6", // Light gray
          200: "#e5e7eb", // Gray
          300: "#d1d5db", // Medium gray
          400: "#9ca3af", // Dark gray
          500: "#6b7280", // Text gray
          700: "#374151", // Dark text
        },
        red: {
          500: "#ef4444", // For negative changes
        },
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px", // Base border radius
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px", // Special button radius
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        button: "8px", // Special button padding
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // If you're using form elements
  ],
};
