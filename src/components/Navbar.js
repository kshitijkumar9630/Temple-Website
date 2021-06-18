import React, { forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	CssBaseline,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Hidden,
	Button,
	Typography,
	IconButton,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
	root: {},
	appBar: {
		display: 'flex',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflow: 'hidden',
		// glassmorphism
	},
	appBarNotification: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '4rem',
		overflow: 'hidden',
	},

	title: {
		flexGrow: 1,
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			textFillColor: 'white',
		},
	},
	navLink: {
		padding: '0 30px',
		color: 'white',
		'&:hover': {
			textFillColor: 'white',
		},
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		padding: theme.spacing(2),
		backgroundColor: '#ff1744',
	},
	drawerButton: {
		textAlign: 'center',
		color: 'white',
	},
	drawerFooter: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const Navbar = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		handleDrawerClose,
	}));
	const classes = useStyles();
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} color="primary">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						className={classes.title}
						component={Link}
						to="/"
					>
						महावीर मंदिर ट्रस्ट
					</Typography>
					<Hidden smDown>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/about"
						>
							About
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/session"
						>
							Book Darshan
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/live"
						>
							Online Darshan
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/donation"
						>
							Donation
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/prasadam"
						>
							Prasadam
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/tenders"
						>
							Gallery
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/contact"
						>
							Contact
						</Button>
					</Hidden>
					<Hidden mdUp>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="top"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<List>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/about"
					>
						<ListItemText primary={'About'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/session"
					>
						<ListItemText primary={'Book Darshan'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/live"
					>
						<ListItemText primary={'Online Darshan'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/donation"
					>
						<ListItemText primary={'Donation'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/prasadam"
					>
						<ListItemText primary={'Prasadam'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/tenders"
					>
						<ListItemText primary={'Gallery'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/contact"
					>
						<ListItemText primary={'Contact'} />
					</ListItem>
				</List>
				<div className={classes.drawerFooter}>
					<IconButton
						className={classes.drawerButton}
						onClick={handleDrawerClose}
					>
						<CloseIcon />
					</IconButton>
				</div>
			</Drawer>
			<AppBar
				position="fixed"
				className={classes.appBarNotification}
				color="secondary"
			>
				<Toolbar>
					<Typography variant="p" align="center">
						We are now accepting online donations
						<Button
							variant="contained"
							color="primary"
							type="submit"
							style={{ margin: '10px', textTransform: 'capitalize' }}
							component={Link}
							to="/donation"
						>
							Click here go to the donation page
						</Button>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
});
export default Navbar;
