/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
     
    }
  },

  daisyui: {
    themes: ['emerald', 'dark'],
  },

  plugins: [require('daisyui')],
};

module.exports = config;
