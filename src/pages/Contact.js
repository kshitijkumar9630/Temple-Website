import React from 'react';
import {
	Typography,
	Container,
	Paper,
	Button,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
const useStyles = makeStyles((theme) => ({
	heroContainer: {
		backgroundColor: '#ff1744',
		color: 'white',
		height: '500px',
		paddingTop: '2.5rem',
		paddingBottom: '4rem',
	},
	paper: {
		padding: theme.spacing(4),
	},
	formControl: { width: '16rem' },
}));
const Contact = () => {
	const classes = useStyles();

	return (
		<>
			<Container
				className={classes.heroContainer}
				component="div"
				maxWidth="false"
				disableGutters
			>
				<Container component="div" maxWidth="sm">
					<Typography variant="h3" component="h3" gutterBottom>
						Contact
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						संपर्क करें
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Chief Executive Officer
						<br />
						Mahaveer Mandir Trust, (Rajasthan)
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="md"
				align="center"
				style={{ marginTop: '-6rem', marginBottom: '6rem' }}
			>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography
						variant="h6"
						component="h6"
						color="primary"
						gutterBottom
						style={{ marginTop: '1rem' }}
						align="left"
					>
						Kothari Shree Shree Kashtabhanjan dev Hanumanji Mandir <br />
						P.O.Salangpur(Hanuman) Tal:Barwala, Dist.Botad, State-Rajasthan
						<br />
						Pin-382450. <br />
						Contact Number: 9825835304 <br />
						Contact Number: 9825835305 <br />
						Contact Number: 9825835306 <br />
						Website: www.salangpurhanumanji.org <br />
						Email: shreesalangpur@gmail.com
					</Typography>
				</Paper>
			</Container>
		</>
	);
};

export default Contact;
