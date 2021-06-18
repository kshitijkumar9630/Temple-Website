import React from 'react';
import Cards from './Cards';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		color: 'white',
		marginTop: '-6rem',
		[theme.breakpoints.down('md')]: {
			marginTop: '-4rem',
		},
	},
}));
const CardArea = () => {
	const classes = useStyles();
	return (
		<Container className={classes.cardContainer} component="div">
			<Cards />
		</Container>
	);
};

export default CardArea;
