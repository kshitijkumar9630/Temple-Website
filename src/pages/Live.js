import React from 'react';
import ReactPlayer from 'react-player/youtube';
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
	Hidden,
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
	player: { width: '2rem' },
}));
const Live = () => {
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
						Live Darshan
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						लाइव दर्शन
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Live darshan is broadcasted directy from the hanuman temple. <br />
					</Typography>
				</Container>
			</Container>
			<Container
				disableGutters
				align="center"
				style={{ marginTop: '-6rem', marginBottom: '6rem' }}
			>
				<Hidden only={['md', 'sm', 'xs']}>
					<ReactPlayer
						height="720px"
						width="1280px"
						url="https://www.youtube.com/watch?v=XwO_QnzpmQI"
					/>
				</Hidden>
				<Hidden only={['lg', 'xs', 'xl']}>
					<ReactPlayer
						height="360px"
						width="640px"
						url="https://www.youtube.com/watch?v=XwO_QnzpmQI"
					/>
				</Hidden>
				<Hidden only={['md', 'lg', 'sm', 'xl']}>
					<ReactPlayer
						height="180px"
						width="320px"
						url="https://www.youtube.com/watch?v=XwO_QnzpmQI"
					/>
				</Hidden>
			</Container>
		</>
	);
};

export default Live;
