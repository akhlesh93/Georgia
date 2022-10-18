module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '479px' },
		},
		extend: {
			colors: {
				primary: '#d3ab55',
				secondary: '#bbb',
				dark: '#262626',
			},
			fontFamily: {
				dancing: ['Dancing Script', 'cursive'],
				josefin: ['Josefin Sans', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
			},
			backgroundImage: {
				hero: 'url(../images/bg.jpeg)',
			},
		},
	},
	plugins: [],
};
