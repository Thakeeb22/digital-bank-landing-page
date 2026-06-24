/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pri-blue": "hsl(233,26%,24%)",
        "pri-green": "hsl(135, 64%,51%)",
        "pri-cyan": "hsl(192,69%,51%)",
      },
    },
  },
  plugins: [],
};
