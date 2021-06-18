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
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@material-ui/core';

import ImageTwo from '../assets/images/8.jpg';
import Image from '../assets/images/9.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: { padding: theme.spacing(2) },
}));

const AcitivityArea = () => {
	const classes = useStyles();

	return (
		<Container style={{ marginTop: '1rem' }}>
			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="center"
				spacing={2}
			>
				<Grid item xl={6} lg={6} md={6} sm={12} xs={12} align="center">
					<div>
						<Paper className={classes.paper} align="center">
							<img
								src={ImageTwo}
								style={{ height: '300px', borderRadius: '100%' }}
							/>
							<Typography gutterBottom variant="h5" component="h2">
								Daily Programme
							</Typography>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								color="primary"
							>
								दैनिक कार्यक्रम
							</Typography>
							<List>
								<ListItem alignItems="flex-end">
									<ListItemText
										primary="4:00 am"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													color="textPrimary"
												>
													Temple open
												</Typography>
												<br />
												<Typography
													component="span"
													variant="body2"
													color="primary"
												>
													मंदिर खुलने का समय
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="6:00 am"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													color="textPrimary"
												>
													Morning arti
												</Typography>
												<br />
												<Typography
													component="span"
													variant="body2"
													color="primary"
												>
													प्रभात आरती
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="7:00 am"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													color="textPrimary"
												>
													Hanuman chalisa chanting
												</Typography>
												<br />
												<Typography
													component="span"
													variant="body2"
													color="primary"
												>
													हनुमान चालीसा पाठ
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="5:00 pm"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													color="textPrimary"
												>
													Evening arti
												</Typography>
												<br />
												<Typography
													component="span"
													variant="body2"
													color="primary"
												>
													संध्या आरती
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="7:00 pm"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													color="textPrimary"
												>
													Temple close
												</Typography>
												<br />
												<Typography
													component="span"
													variant="body2"
													color="primary"
												>
													मंदिर बंद का समय
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
							</List>
						</Paper>
					</div>
				</Grid>
				<Grid item xl={6} lg={6} md={6} sm={12} xs={12} align="center">
					<div>
						<Paper className={classes.paper}>
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
								Upcoming Events
							</Typography>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								align="center"
								color="primary"
							>
								आगामी कार्यक्रम
							</Typography>
							<List>
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="Wednesday, 21 April"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													className={classes.inline}
													color="textPrimary"
												>
													Ramnavmi
												</Typography>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="primary"
												>
													रामनवमी
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="Saturday, 5 June"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													className={classes.inline}
													color="textPrimary"
												>
													World Environment Day
												</Typography>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="primary"
												>
													विश्व पृथ्वी दिवस
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>

								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="Thursday, 7 October"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													className={classes.inline}
													color="textPrimary"
												>
													Navratra
												</Typography>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="primary"
												>
													नवरात्रि
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="Friday, 15 October"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													className={classes.inline}
													color="textPrimary"
												>
													Dussehra
												</Typography>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="primary"
												>
													दशहरा
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
								<ListItem alignItems="flex-start">
									<ListItemText
										primary="Thursday, 4 November"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													className={classes.inline}
													color="textPrimary"
												>
													Diwali
												</Typography>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="primary"
												>
													दीपावली
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
							</List>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AcitivityArea;
