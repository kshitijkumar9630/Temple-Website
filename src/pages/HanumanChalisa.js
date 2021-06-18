import React from 'react';
import {
	Typography,
	Container,
	Paper,
	Button,
	Grid,
	Hidden,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';
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
const HanumanChalisa = () => {
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
						Hanuman Chalisa
					</Typography>
					<Typography variant="h3" component="h3" gutterBottom>
						श्री हनुमान चालीसा
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Your can read or listen to Hanuman Chalisa
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="false"
				align="center"
				style={{ marginTop: '-6rem', marginBottom: '1rem' }}
			>
				<Hidden only={['md', 'sm', 'xs']}>
					<ReactPlayer
						height="720px"
						width="1280px"
						url="https://www.youtube.com/watch?v=sX2bYV6nSy4"
					/>
				</Hidden>
				<Hidden only={['lg', 'xs', 'xl']}>
					<ReactPlayer
						height="360px"
						width="640px"
						url="https://www.youtube.com/watch?v=sX2bYV6nSy4"
					/>
				</Hidden>
				<Hidden only={['md', 'lg', 'sm', 'xl']}>
					<ReactPlayer
						height="180px"
						width="320px"
						url="https://www.youtube.com/watch?v=sX2bYV6nSy4"
					/>
				</Hidden>
			</Container>
			<Container maxWidth="md" align="center">
				<Paper elevation={2} align="center" style={{ paddingTop: '1rem' }}>
					<Grid
						container
						direction="column"
						justify="space-evenly"
						alignItems="center"
					>
						<Grid item align="center">
							<Typography
								variant="h5"
								component="h5"
								color="primary"
								gutterBottom
							>
								दोहा :<br />
								<br />
								श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।
								<br />
								बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि।। <br />
								बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
								<br />
								बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।।
								<br />
								चौपाई :<br />
								<br />
								जय हनुमान ज्ञान गुन सागर।
								<br />
								जय कपीस तिहुं लोक उजागर।।
								<br />
								<br />
								रामदूत अतुलित बल धामा।
								<br />
								अंजनि-पुत्र पवनसुत नामा।।
								<br />
								<br />
								महाबीर बिक्रम बजरंगी।
								<br />
								कुमति निवार सुमति के संगी।।
								<br />
								<br />
								कंचन बरन बिराज सुबेसा।
								<br />
								कानन कुंडल कुंचित केसा।।
								<br />
								<br />
								हाथ बज्र औ ध्वजा बिराजै।
								<br />
								कांधे मूंज जनेऊ साजै।
								<br />
								<br />
								संकर सुवन केसरीनंदन।
								<br />
								तेज प्रताप महा जग बन्दन।।
								<br />
								<br />
								विद्यावान गुनी अति चातुर।
								<br />
								राम काज करिबे को आतुर।।
								<br />
								<br />
								प्रभु चरित्र सुनिबे को रसिया।
								<br />
								राम लखन सीता मन बसिया।।
								<br />
								<br />
								सूक्ष्म रूप धरि सियहिं दिखावा।
								<br />
								बिकट रूप धरि लंक जरावा।।
								<br />
								<br />
								भीम रूप धरि असुर संहारे।
								<br />
								रामचंद्र के काज संवारे।।
								<br />
								<br />
								लाय सजीवन लखन जियाये।
								<br />
								श्रीरघुबीर हरषि उर लाये।।
								<br />
								<br />
								रघुपति कीन्ही बहुत बड़ाई।
								<br />
								तुम मम प्रिय भरतहि सम भाई।।
								<br />
								<br />
								सहस बदन तुम्हरो जस गावैं।
								<br />
								अस कहि श्रीपति कंठ लगावैं।।
								<br />
								<br />
								सनकादिक ब्रह्मादि मुनीसा।
								<br />
								नारद सारद सहित अहीसा।।
								<br />
								<br />
								जम कुबेर दिगपाल जहां ते।
								<br />
								कबि कोबिद कहि सके कहां ते।।
								<br />
								<br />
								तुम उपकार सुग्रीवहिं कीन्हा।
								<br />
								राम मिलाय राज पद दीन्हा।।
								<br />
								<br />
								तुम्हरो मंत्र बिभीषन माना।
								<br />
								लंकेस्वर भए सब जग जाना।।
								<br />
								<br />
								जुग सहस्र जोजन पर भानू।
								<br />
								लील्यो ताहि मधुर फल जानू।।
								<br />
								<br />
								प्रभु मुद्रिका मेलि मुख माहीं।
								<br />
								जलधि लांघि गये अचरज नाहीं।।
								<br />
								<br />
								दुर्गम काज जगत के जेते।
								<br />
								सुगम अनुग्रह तुम्हरे तेते।।
								<br />
								<br />
								राम दुआरे तुम रखवारे।
								<br />
								होत न आज्ञा बिनु पैसारे।।
								<br />
								<br />
								सब सुख लहै तुम्हारी सरना।
								<br />
								तुम रक्षक काहू को डर ना।।
								<br />
								<br />
								आपन तेज सम्हारो आपै।
								<br />
								तीनों लोक हांक तें कांपै।।
								<br />
								<br />
								भूत पिसाच निकट नहिं आवै।
								<br />
								महाबीर जब नाम सुनावै।।
								<br />
								<br />
								नासै रोग हरै सब पीरा।
								<br />
								जपत निरंतर हनुमत बीरा।।
								<br />
								<br />
								संकट तें हनुमान छुड़ावै।
								<br />
								मन क्रम बचन ध्यान जो लावै।।
								<br />
								<br />
								सब पर राम तपस्वी राजा।
								<br />
								तिन के काज सकल तुम साजा।
								<br />
								<br />
								और मनोरथ जो कोई लावै।
								<br />
								सोइ अमित जीवन फल पावै।।
								<br />
								<br />
								चारों जुग परताप तुम्हारा।
								<br />
								है परसिद्ध जगत उजियारा।।
								<br />
								<br />
								साधु-संत के तुम रखवारे।
								<br />
								असुर निकंदन राम दुलारे।।
								<br />
								<br />
								अष्ट सिद्धि नौ निधि के दाता।
								<br />
								अस बर दीन जानकी माता।।
								<br />
								<br />
								राम रसायन तुम्हरे पासा।
								<br />
								सदा रहो रघुपति के दासा।।
								<br />
								<br />
								तुम्हरे भजन राम को पावै।
								<br />
								जनम-जनम के दुख बिसरावै।।
								<br />
								<br />
								अन्तकाल रघुबर पुर जाई।
								<br />
								जहां जन्म हरि-भक्त कहाई।।
								<br />
								<br />
								और देवता चित्त न धरई।
								<br />
								हनुमत सेइ सर्ब सुख करई।।
								<br />
								<br />
								संकट कटै मिटै सब पीरा।
								<br />
								जो सुमिरै हनुमत बलबीरा।।
								<br />
								<br />
								जै जै जै हनुमान गोसाईं।
								<br />
								कृपा करहु गुरुदेव की नाईं।।
								<br />
								<br />
								जो सत बार पाठ कर कोई।
								<br />
								छूटहि बंदि महा सुख होई।।
								<br />
								<br />
								जो यह पढ़ै हनुमान चालीसा।
								<br />
								होय सिद्धि साखी गौरीसा।।
								<br />
								<br />
								तुलसीदास सदा हरि चेरा।
								<br />
								कीजै नाथ हृदय मंह डेरा।। <br />
								<br />
								दोहा :<br />
								<br />
								पवन तनय संकट हरन, मंगल मूरति रूप।
								<br />
								राम लखन सीता सहित, हृदय बसहु सुर भूप।।
								<br />
								<br />
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};

export default HanumanChalisa;
