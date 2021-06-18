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
	Container,
} from '@material-ui/core';
import Image from '../assets/images/13.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: { padding: theme.spacing(2) },
}));

const HanumanChalisaArea = () => {
	const classes = useStyles();

	return (
		<div>
			<Container style={{ marginTop: '1rem' }} align="center">
				<Card className={classes.card}>
					<CardActionArea component={Link} to="/hanumanchalisa">
						<CardContent>
							<img
								src={Image}
								style={{ height: '300px', borderRadius: '100%' }}
							/>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								align="center"
							>
								Hanuman Chalisa
							</Typography>

							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								color="primary"
								align="center"
							>
								श्री हनुमान चालीसा
							</Typography>
							<Grid
								container
								direction="row"
								justify="flex-start"
								alignItems="center"
							>
								<Grid item>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										align="left"
										gutterBottom
									>
										<Button
											size="small"
											color="primary"
											style={{ borderRadius: '50px' }}
										></Button>
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Container>
		</div>
	);
};

export default HanumanChalisaArea;
