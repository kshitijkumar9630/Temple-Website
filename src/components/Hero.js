import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	heroContainer: {
		backgroundColor: '#ff1744',
		color: 'white',
		height: '700px',
		paddingTop: '2.5rem',
		paddingBottom: '4rem',
	},
}));
const Hero = () => {
	const classes = useStyles();

	return (
		<Container
			className={classes.heroContainer}
			component="div"
			maxWidth="false"
			disableGutters
		>
			<Container component="div" maxWidth="sm">
				<Typography variant="h2" component="h2" gutterBottom>
					जय श्री राम
				</Typography>
				<Typography variant="h5" component="h5" gutterBottom>
					महावीर मंदिर ट्रस्ट आपका हार्दिक स्वागत करता है।
				</Typography>
				<Typography variant="h3" component="h3" gutterBottom>
					Mahaveer Mandir Trust
				</Typography>
				<Typography variant="h6" component="h6" gutterBottom>
					Welcomes you to it's online portal. You can daonate, divya darshan,
					order prasad, and can book a darshan session online.
				</Typography>
			</Container>
		</Container>
	);
};

export default Hero;
