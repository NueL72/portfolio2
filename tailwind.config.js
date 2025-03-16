module.exports = {
    content: [
      './index.html', // Path to your HTML files
      './src/**/*.{js,ts,jsx,tsx}', // Path to your JS/TS files (if applicable)
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }