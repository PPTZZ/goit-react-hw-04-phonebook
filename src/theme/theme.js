import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#597e52',
		},
		secondary: {
			main: '#c6a969',
		},
		background: {
			default: '#F0F0F0',
			white: '#fff',
		},
		text: {
			primary: '#2d2d2d',
			secondary: '#838383',
			disabled: '#d2d2d2',
		},
		error: {
			background: '#e57373',
			main: '#f44336',
			icon: '#d32f2f',
		},
	},
	typography: {
		fontFamily: 'Inter',
		fontSize: 14,
		button: {
			lineHeight: 1,
		},
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});
theme = responsiveFontSizes(theme);
