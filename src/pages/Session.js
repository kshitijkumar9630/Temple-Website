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
	formControl: { width: '16rem' },
}));
const Session = () => {
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
						Darshan
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						दर्शन
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Your can book a session and darshan according to your selected time
						slot. <br />
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="xs"
				align="center"
				style={{ marginTop: '-6rem', marginBottom: '6rem' }}
			>
				<Paper elevation={2} align="center">
					<Grid
						container
						direction="column"
						justify="space-evenly"
						alignItems="center"
					>
						<Grid item align="center">
							<Typography
								variant="h4"
								component="h4"
								color="primary"
								gutterBottom
								style={{ marginTop: '2rem' }}
							>
								Booking
							</Typography>
							<Typography variant="p" component="p" gutterBottom>
								You can book for maximum 4 people at a time.
							</Typography>
						</Grid>
						<Grid item align="center">
							<form className="form" style={{ marginTop: '2rem' }}>
								<div style={{ marginTop: '1rem' }}>
									<FormControl
										variant="outlined"
										size="small"
										gutterBottom
										className={classes.formControl}
									>
										<InputLabel id="demo-simple-select-outlined-label">
											Select no of people
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											label="	Select no of people"
										>
											<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={2}>One</MenuItem>
											<MenuItem value={4}>Two</MenuItem>
											<MenuItem value={10}>Three</MenuItem>
											<MenuItem value={25}>Four</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div style={{ marginTop: '1rem' }}>
									<FormControl
										variant="outlined"
										size="small"
										gutterBottom
										className={classes.formControl}
									>
										<InputLabel id="demo-simple-select-outlined-label">
											Select duration
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											label="Select duration"
											size="small"
										>
											<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={10}>5 minutes</MenuItem>
											<MenuItem value={20}>10 minutes</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div style={{ marginTop: '1rem' }}>
									<FormControl
										variant="outlined"
										size="small"
										gutterBottom
										className={classes.formControl}
									>
										<InputLabel id="demo-simple-select-outlined-label">
											Select timing
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											label="Select timing"
											size="small"
										>
											<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={1}>06:00 am</MenuItem>
											<MenuItem value={2}>06:30 am</MenuItem>
											<MenuItem value={3}>07:00 am</MenuItem>
											<MenuItem value={4}>07:30 am</MenuItem>
											<MenuItem value={5}>08:00 am</MenuItem>
											<MenuItem value={6}>08:30 am</MenuItem>
											<MenuItem value={7}>09:00 am</MenuItem>
											<MenuItem value={8}>09:30 am</MenuItem>
											<MenuItem value={9}>10:30 am</MenuItem>
											<MenuItem value={10}>11:00 am</MenuItem>
											<MenuItem value={11}>01:00 pm</MenuItem>
											<MenuItem value={12}>01:30 pm</MenuItem>
											<MenuItem value={13}>02:00 pm</MenuItem>
											<MenuItem value={14}>02:30 pm</MenuItem>
											<MenuItem value={15}>04:00 pm</MenuItem>
											<MenuItem value={16}>04:30 pm</MenuItem>
											<MenuItem value={17}>06:00 pm</MenuItem>
											<MenuItem value={18}>06:30 pm</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div>
									<Button
										variant="contained"
										color="primary"
										style={{ margin: '3rem' }}
										component={Link}
										to="/payment"
									>
										Proceed to Payment
									</Button>
								</div>
							</form>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};

export default Session;
