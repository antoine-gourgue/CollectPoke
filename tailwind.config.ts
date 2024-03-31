module.exports = {
    plugins: [require('tailwindcss-debug-screens')],
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            serif:
                'Souvenir, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        },
        screens: {
            xs: '450px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '70rem',
                '2xl': '70rem',
            },
        },
        extend: {
            keyframes: {
                car: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '17%': { transform: 'rotate(-20deg)' },
                    '42%': { transform: 'rotate(20deg)' },
                    '88%': { transform: 'rotate(-20deg)' },
                },
            },
            animation: {
                car: 'car 0.3s ease-in-out',
            },
            textColor: {
                base: '#4C5661',
            },
            colors: {
                "primary": {
                    "400": "#FF1C1C",
                },
                "secondary": {
                    "50": "#FF8989",
                    "100": "#FF7575",
                    "200": "#FF6161",
                    "300": "#FF4D4D",
                    "400": "#FF3939",
                    "500": "#FF2525",
                    "600": "#FF1111",
                    "700": "#FF1C1C",
                    "800": "#E61818",
                    "900": "#CC1414",
                    "950": "#B31010"
                },
                slate: {
                    100: '#F5F8FF',
                },
                gray: {
                    700: '#4C5661',
                },
                black: '#131A20',
            },
            spacing: {},
        },
    },
}