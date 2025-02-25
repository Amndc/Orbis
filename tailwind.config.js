/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}",],
    theme: {
      extend: {backgroundImage: {'fundo': "url('./assets/fundo.png')"}},
    },
    plugins: [require('@tailwindcss/forms')],
  }