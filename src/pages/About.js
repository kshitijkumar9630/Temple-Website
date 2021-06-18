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
import Image from '../assets/images/6.jpg';
const useStyles = makeStyles((theme) => ({
	heroContainer: {
		backgroundColor: '#ff1744',
		color: 'white',
		height: '500px',
		paddingTop: '2.5rem',
		paddingBottom: '4rem',
	},
	paper: {
		padding: theme.spacing(4),
	},
	formControl: { width: '16rem' },
	image: {
		[theme.breakpoints.down('sm')]: {
			height: '120px',
		},
		[theme.breakpoints.up('sm')]: { height: '220px' },
		[theme.breakpoints.up('md')]: { height: '500px' },
	},
}));
const Prasadam = () => {
	const classes = useStyles();

	return (
		<>
			<Container
				maxWidth="false"
				style={{ overflow: 'hidden' }}
				disableGutters
				align="center"
			>
				<img src={Image} className={classes.image} />
			</Container>
			<Container
				className={classes.heroContainer}
				component="div"
				maxWidth="false"
				disableGutters
			>
				<Container component="div" maxWidth="sm">
					<Typography variant="h3" component="h3" gutterBottom>
						About
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						अबाउट
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Mhaveer Mandir Trust was founded by Surya Krishna in 1876.
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="md"
				align="center"
				style={{ marginTop: '-6rem', marginBottom: '6rem' }}
			>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography
						variant="h4"
						component="h4"
						color="primary"
						gutterBottom
						style={{ marginTop: '1rem', marginBottom: '2rem' }}
					>
						महावीर मंदिर ट्रस्ट
					</Typography>

					<Typography
						variant="p"
						component="p"
						gutterBottom
						style={{ marginBottom: '1rem' }}
					>
						Shri Saibaba Sansthan Trust, Shirdi, is the Governing and
						Administrative body of the Shri Saibaba's Samadhi Temple and all
						others temples on this premise, and devoted towards development of
						Shirdi village.
					</Typography>
					<Typography
						variant="p"
						component="p"
						gutterBottom
						style={{ marginBottom: '1rem' }}
					>
						Shri Saibaba Sansthan Trust, Shirdi, is the authorized body to
						control and manage the day-to-day activities at the Shri Saibaba
						Samadhi Temple. It also provides various facilities like
						Accommodation, Meals (Free), refreshments, and lot more. The
						Sansthan Trust also runs School and Colleges(Junior and Senior),
						English Medium School from class Jr KG to Std X, Industrial Training
						Institute (ITI), Drinking Water Supply, Hospitals (Shri Saibaba
						Superspecility Hospital and Shri Sainath Hospital on Charity basis).
					</Typography>
					<Typography
						variant="p"
						component="p"
						gutterBottom
						style={{ marginBottom: '1rem' }}
					>
						Shirdi, a small rural town in the Rahata Taluka of Ahmednagar
						district in the Maharashtra state of India. Shirdi is a secular
						place where all religions are treated as one and a belief in the
						power of Faith and Patience is foremost. A place where all heads bow
						down in prayer, where faith prevails, where hopes are built, where
						patience pays, and where infinite joy and everlasting contentment
						abound. Such is the glory of the place which belongs to the Holy
						Saint, a true repository of wisdom, who pleased all with pious
						equality and gifted mankind ornaments of humanity and peace by
						saying "SABKA MALIK EK". The footprints of Saibaba have made this
						town a holy place. Millions of devotees continuously flock here from
						all over India and abroad. Situated on the Ahmednagar-Manmad
						highway.
					</Typography>
					<Typography
						variant="p"
						component="p"
						gutterBottom
						style={{ marginBottom: '1rem' }}
					>
						Shirdi can be reached from the new railway station at Sainagar;
						Manmad-Junction, Kopargaon and Nagarsul are other nearby railway
						stations on the Central Railway. Shirdi is where the holy soul of
						Shri Satchidanand Sadguru Sainath Maharaj - affectionately known as
						“Saibaba” rests today. Shri Saibaba appeared at Shirdi in his human
						incarnation. For 60 years Baba served mankind and preached his
						precious teachings to the world from here, and then went for
						contemplation (Samadhi) in Shirdi itself. The footprints and the
						deeds of Saibaba have turned this small town into a unique holy
						place for people of all castes, creeds and religions. Saibaba
						delivered the universal slogan of "Shraddha - Saburi", i.e. Faith
						and Patience for everyone, from here itself. The place of his
						'Samadhi' has become a center-point for innumerable devotees,
						infusing them with the joy of life. While visiting Shirdi, one
						experiences complete peace of mind, a strong self-confidence, and a
						great sense of purpose. During his contemplation (Samadhi) services,
						Shri Saibaba had consoled his devotees with these words - "After I
						take Samadhi, my bones will speak from the grave, and people will
						throng here." His message is being experienced till today. Shirdi is
						a convenient place to visit throughout the year, during all seasons.
						Baba's Shirdi is one place where even today all his devotees come
						with empty hands, but filled with Hope, and go back "Blessed with
						Contentment with an Everlasting Smile on their faces".
					</Typography>
				</Paper>
			</Container>
		</>
	);
};

export default Prasadam;
