/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color60: "#1e1e1e",
        color60shade: '#292929',
        color30: "#f2f2f2",
        color10shade: "#FFD485",
        color10: "#ffb01f",
        testcolor1: "#942911",
        testcolor2: "#904E55"
      },
      fontFamily: {
        "PlayfairDisplay": ["Playfair Display", "Serif"],
        "OpenSans": ["Open Sans", "Sans-Serif"],
        "RobotoSerif": ["Roboto Serif", "Serif"]
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

