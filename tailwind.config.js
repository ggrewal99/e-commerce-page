/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    orange: 'hsl(26, 100%, 55%)',
                    paleOrange: 'hsl(25, 100%, 94%)',
                },
                neutral: {
                    veryDarkBlue: 'hsl(220, 13%, 13%)',
                    darkGrayishBlue: 'hsl(219, 9%, 45%)',
                    grayishBlue: 'hsl(220, 14%, 75%)',
                    lightGrayishBlue: 'hsl(223, 64%, 98%)',
                    white: 'hsl(0, 0%, 100%)',
                    black: 'hsla(0, 0%, 0%, 0.75)',
                },
            },
            plugins: [require('daisyui')],
        }
    }
}
