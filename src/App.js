import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Litrature from './pages/Litrature';
import Media from './pages/Media';
import Services from './pages/Services';
import Tenders from './pages/Tenders';
import Tourism from './pages/Tourism';
import Live from './pages/Live';
import Donation from './pages/Donation';
import Session from './pages/Session';
import Prasadam from './pages/Prasadam';
import Payment from './pages/Payment';
import Navbar from './components/Navbar';
import HanumanChalisa from './pages/HanumanChalisa';
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{'Copyright © '}
			<Link color="inherit" href="http://moduluspi.com/">
				ModulusPi
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	main: {
		marginTop: theme.spacing(16),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[800],
	},
}));
const App = () => {
	const classes = useStyles();

	return (
		<BrowserRouter>
			<div className={classes.root}>
				<CssBaseline />
				<Navbar />
				<Container
					component="main"
					className={classes.main}
					maxWidth="false"
					disableGutters
				>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/litrature" component={Litrature} />
						<Route path="/media" component={Media} />
						<Route path="/services" component={Services} />
						<Route path="/tenders" component={Tenders} />
						<Route path="/tourism" component={Tourism} />
						<Route path="/session" component={Session} />
						<Route path="/live" component={Live} />
						<Route path="/donation" component={Donation} />
						<Route path="/prasadam" component={Prasadam} />
						<Route path="/payment" component={Payment} />

						<Route path="/hanumanchalisa" component={HanumanChalisa} />
					</Switch>
				</Container>
				<footer className={classes.footer}>
					<Container maxWidth="sm">
						<Typography variant="body1">
							This website has been developed by ModulusPi
						</Typography>
						<Copyright />
					</Container>
				</footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
