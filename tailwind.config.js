/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                KlipanBlack: ["KlipanBlack", "serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
