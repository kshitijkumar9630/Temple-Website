import React from 'react';
import CardArea from '../components/CardArea';
import Hero from '../components/Hero';
import Sliders from '../components/Sliders';
import News from '../components/News';
import AcitivityArea from '../components/AcitivityArea';
import HanumanChalisa from '../components/HanumanChalisaArea';
const Home = () => {
	return (
		<div>
			<Sliders />
			<Hero />
			<CardArea />
			<News />
			<HanumanChalisa />
			<AcitivityArea />
		</div>
	);
};

export default Home;
