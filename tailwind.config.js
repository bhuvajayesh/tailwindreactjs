/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "class-bg": "url('/src/images/class-bg.jpg')",
        "student-bg": "url('/src/images/student-bg.jpg')",
      },
    },
  },
  plugins: [],
};
