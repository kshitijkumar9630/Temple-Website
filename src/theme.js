import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff1744',
		},
		secondary: {
			main: '#ffcdd2',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: "'Noto Sans', sans-serif",
	},
});

export default theme;
