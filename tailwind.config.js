const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
<<<<<<< HEAD
				// Light theme — soft, warm, easy on the eyes
				'primary-light': '#F5F3EF',
				'secondary-light': '#FAF9F7',
				'ternary-light': '#EDEAE5',

				// Dark theme — warm charcoal, not harsh blue-black
				'primary-dark': '#1A1A1A',
				'secondary-dark': '#222222',
				'ternary-dark': '#2D2D2D',

				// Accent — warm, muted gold
				'accent': '#C9943E',
				'accent-hover': '#B8842F',
				'accent-light': '#F5EDE0',
				'accent-dark': '#A87630',
=======
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};
