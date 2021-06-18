import React, { Component } from 'react';
import {
	Container,
	TextField,
	Button,
	Paper,
	Typography,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import firebase from '../firebase';

export default class Donation extends Component {
	constructor() {
		super();
		this.state = {
			form: true,
			alert: false,
		};
	}

	onChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	setUpRecaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
			'recaptcha-container',
			{
				size: 'invisible',
				callback: function (response) {
					console.log('Captcha Resolved');
					this.onSignInSubmit();
				},
				defaultCountry: 'IN',
			}
		);
	};

	onSignInSubmit = (e) => {
		e.preventDefault();
		this.setUpRecaptcha();
		let phoneNumber = '+91' + this.state.mobile;
		console.log(phoneNumber);
		let appVerifier = window.recaptchaVerifier;
		firebase
			.auth()
			.signInWithPhoneNumber(phoneNumber, appVerifier)
			.then(function (confirmationResult) {
				// SMS sent. Prompt user to type the code from the message, then sign the
				// user in with confirmationResult.confirm(code).
				window.confirmationResult = confirmationResult;
				console.log(confirmationResult);
				console.log('OTP is sent');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	onSubmitOtp = (e) => {
		e.preventDefault();
		let otpInput = this.state.otp;
		let optConfirm = window.confirmationResult;
		console.log(optConfirm);
		optConfirm
			.confirm(otpInput)
			.then(function (result) {
				// User signed in successfully.
				console.log('Result' + result.verificationID);
				let phone = result.user.phoneNumber;
				alert('OTP verified for ' + phone);
			})
			.catch(function (error) {
				console.log(error);
				alert('Incorrect OTP');
			});
	};

	render() {
		return (
			<div>
				<Container
					component="div"
					maxWidth="false"
					style={{
						backgroundColor: '#ff1744',
						color: 'white',
						height: '500px',
						paddingTop: '2.5rem',
						paddingBottom: '4rem',
					}}
				>
					<Container component="div" maxWidth="sm">
						<Typography variant="h3" component="h3" gutterBottom>
							Donation
						</Typography>
						<Typography variant="h3" component="h3" gutterBottom>
							दान पात्र
						</Typography>
						<Typography variant="h5" component="h5" gutterBottom>
							Log in securely with your mobile number to continue payment
							process.
						</Typography>
					</Container>
				</Container>
				<Container
					maxWidth="xs"
					align="center"
					style={{ height: '30rem', marginTop: '-6rem', marginBottom: '6rem' }}
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
									Login
								</Typography>
							</Grid>
							<Grid item align="center">
								<form
									className="form"
									onSubmit={this.onSignInSubmit}
									style={{ marginTop: '2rem' }}
								>
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
										label="Enter mobile number"
										type="number"
										name="mobile"
										onChange={this.onChangeHandler}
										helperText="10 digit mobile number."
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

								<form className="form" onSubmit={this.onSubmitOtp}>
									{/* <input
							id="otp"
							type="number"
							name="otp"
							placeholder="OTP"
							onChange={this.onChangeHandler}
						/> */}
									<TextField
										variant="outlined"
										size="small"
										label="Enter OTP"
										id="otp"
										type="number"
										name="otp"
										onChange={this.onChangeHandler}
										helperText="OTP received on the phone."
										style={{ margin: '10px' }}
										required
									/>
									<div>
										<Button
											variant="contained"
											color="primary"
											type="submit"
											style={{ margin: '10px' }}
										>
											Login
										</Button>
									</div>
								</form>
								<Button
									size="small"
									color="primary"
									style={{ marginTop: '5rem', marginBottom: '2rem' }}
									component={Link}
									to="/payment"
								>
									Next
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Container>
			</div>
		);
	}
}
