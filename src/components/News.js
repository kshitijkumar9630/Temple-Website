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
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: { padding: theme.spacing(2) },
}));

const News = () => {
	const classes = useStyles();

	const cardContent = [
		{
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			body:
				'होभर प्राण प्रदान किएलोग विश्व पढाए कुशलता वास्तव जानकारी पसंद तरहथा। उपलब्धता विवरण दिशामे जानकारी नवंबर बदले अपनि प्रमान सुस्पश्ट शीघ्र भारतीय विज्ञान निर्देश डाले। भाषा बनाति कुशलता दुनिया ।क जनित हमेहो। प्राथमिक प्रव्रुति पहेला सहयोग गटको ऎसाजीस रहारुप विचारशिलता',
		},
		{
			body:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			body:
				'होभर प्राण प्रदान किएलोग विश्व पढाए कुशलता वास्तव जानकारी पसंद तरहथा। उपलब्धता विवरण दिशामे जानकारी नवंबर बदले अपनि प्रमान सुस्पश्ट शीघ्र भारतीय विज्ञान निर्देश डाले। भाषा बनाति कुशलता दुनिया ।क जनित हमेहो। प्राथमिक प्रव्रुति पहेला सहयोग गटको ऎसाजीस रहारुप विचारशिलता',
		},
	];
	return (
		<div>
			<Container>
				<Paper className={classes.paper} style={{ marginTop: '1rem' }}>
					<Typography gutterBottom variant="h5" component="h2" align="center">
						News
					</Typography>

					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						color="primary"
						align="center"
					>
						न्यूज़
					</Typography>
					<Grid
						container
						direction="row"
						justify="flex-start"
						alignItems="center"
					>
						{cardContent.map((content) => (
							<Grid item>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									align="left"
									gutterBottom
								>
									{content.body}
									<Button
										size="small"
										color="primary"
										style={{ borderRadius: '50px' }}
									>
										<ArrowForwardIosSharpIcon style={{ height: '10px' }} />
									</Button>
								</Typography>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Container>
		</div>
	);
};

export default News;
