/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../apps/**/app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {},
    plugins: [require("@tailwindcss/typography")],
};