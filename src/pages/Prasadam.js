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
const Prasadam = () => {
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
						Prasadam
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						प्रसाद
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Your can purchase motichoor, besan ladoos made with clarified
						butter. <br />
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
								Purchase
							</Typography>
							<Typography variant="p" component="p" gutterBottom>
								You can purchase a pack of 2, 4, 10 or 25 ladoos.
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
											Select the pack size
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											label="Select the pack size"
										>
											<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={2}>Two</MenuItem>
											<MenuItem value={4}>Four</MenuItem>
											<MenuItem value={10}>Ten</MenuItem>
											<MenuItem value={25}>Twenty five</MenuItem>
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
											Select type of ladoos
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											label="Select type of ladoos"
											size="small"
										>
											<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={10}>Motichoor</MenuItem>
											<MenuItem value={20}>Besan</MenuItem>
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

export default Prasadam;
