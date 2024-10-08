// tailwind.config.js
module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './App.{js,ts,vue}',
        './app.{js,ts,vue}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-primeui')
    ],
}
