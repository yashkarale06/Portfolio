/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff', // White
                secondary: '#f8fafc', // Slate 50
                accent: '#6366f1', // Indigo 500
                'accent-hover': '#4f46e5', // Indigo 600
                dark: '#0f172a', // Slate 900
            },
            fontFamily: {
                sans: ['"JetBrains Mono"', 'monospace'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
