import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const { heroui } = require("@heroui/react");


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        heroui()
    ],
};
