import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Typography,
	Button,
	Grid,
	Paper,
} from '@material-ui/core';
import ImageOne from '../assets/images/7.JPG';
import ImageTwo from '../assets/images/10.jpg';
import ImageThree from '../assets/images/11.jpg';
import ImageFour from '../assets/images/12.jpg';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	card: {},
	icon: {
		borderRadius: '50px',
		color: '#ff1744',
		padding: '13px',
		width: '50px',
		height: '50px',

		marginTop: '-25rem',
		marginBottom: '25rem',
		marginLeft: '13rem',
	},
	image: {
		height: '200px',
		borderRadius: '100%',
	},
}));

const Cards = () => {
	const classes = useStyles();

	const cardContent = [
		{
			heading: 'Book Darshan',
			subHeading: 'दर्शन बुक करे',
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			to: '/session',
			image: ImageOne,
		},
		{
			heading: 'Online Darshan (Live)',
			subHeading: 'ऑनलाइन दर्शन',
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			to: '/live',
			image: ImageTwo,
		},
		{
			heading: 'Donation',
			subHeading: 'दान पात्र',
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
			to: '/donation',
			image: ImageThree,
		},
		{
			heading: 'Prasadam',
			subHeading: 'प्रसाद (लड्डू)',
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
			to: '/prasadam',
			image: ImageFour,
		},
	];
	return (
		<div>
			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="center"
				spacing={2}
			>
				{cardContent.map((content) => (
					<Grid item xl={3} lg={3} md={6} sm={6} xs={12} align="center">
						<div>
							<Card className={classes.card}>
								<CardActionArea component={Link} to={content.to}>
									<CardContent>
										<img src={content.image} className={classes.image} />
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											align="center"
										>
											{content.heading}
										</Typography>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											align="center"
											color="primary"
										>
											{content.subHeading}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											align="left"
										>
											{content.body}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button
										size="small"
										color="primary"
										component={Link}
										to={content.to}
									>
										More
									</Button>
								</CardActions>
							</Card>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Cards;
