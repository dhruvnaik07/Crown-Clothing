import React from 'react';
import './homepage.scss';
import Directory from '../../Components/Directory/directory.jsx';
import {HomePageContainer} from './homepage.styles.jsx';

const HomePage = () => (

	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

export default HomePage;