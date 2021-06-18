import React from 'react';
import {
	Typography,
	Container,
	Paper,
	Button,
	Grid,
	TextField,
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
}));
const Payment = () => {
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
						Payment
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						पेमेंट
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Your payment is end-to-end encrypted. <br />
						Secured by Razor Pay.
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="xs"
				align="center"
				style={{ height: '40rem', marginTop: '-6rem', marginBottom: '6rem' }}
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
								Details
							</Typography>
							<Typography variant="p" component="p" gutterBottom>
								Enter Credit/Debit card details.
							</Typography>
						</Grid>
						<Grid item align="center">
							<form className="form" style={{ marginTop: '2rem' }}>
								<div id="recaptcha-container"></div>

								{/* <input
							type="number"
							name="mobile"
							placeholder="Mobile Number"
							onChange={this.onChangeHandler}
							required
						/> */}

								<TextField
									variant="outlined"
									size="small"
									label="Name on the card"
									type="text"
									name="cName"
									helperText="As mentioned in the card."
									required
									style={{ margin: '10px' }}
								/>

								<TextField
									variant="outlined"
									size="small"
									label="Card number"
									type="text"
									name="cNumber"
									helperText="16 digit card number."
									required
									style={{ margin: '10px' }}
								/>

								<TextField
									variant="outlined"
									size="small"
									label="Expiry Date"
									type="text"
									name="eDate"
									helperText="Example 03/28."
									required
									style={{ margin: '10px' }}
								/>
								<TextField
									variant="outlined"
									size="small"
									label="CVV"
									type="text"
									name="cvv"
									helperText="Last 3 digits on signature strip."
									required
									style={{ margin: '10px' }}
								/>
								<div>
									<Button
										variant="contained"
										color="primary"
										type="submit"
										style={{ margin: '10px' }}
									>
										Send OTP
									</Button>{' '}
								</div>
							</form>
							<div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
								<a href="https://razorpay.com/" target="_blank">
									<img
										referrerpolicy="origin"
										src="https://badges.razorpay.com/badge-dark.png "
										style={{
											height: '90px',
											width: '226px',
											borderRadius: '10px',
										}}
										alt="Razorpay | Payment Gateway | Neobank"
									/>
								</a>
							</div>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};

export default Payment;
