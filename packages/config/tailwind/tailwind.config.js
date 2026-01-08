/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../apps/**/app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../apps/**/components/**/*.{js,ts,jsx,tsx,mdx}",
        "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    plugins: [require("@tailwindcss/typography")],
};