import React from 'react';
import Common from './Common';
import sc from '../src/Images/logo2.png';

const Home = () => {
	return (
		<>
			<div className='homeBackground'>
				<Common
					text='Welcome to my site Folks!'
					subhead='Sober N Happy!!'
					imgsrc={sc}
					imgalt='home.png'
					link='/service'
					headline='Sitcoholic'
					button='Get Started'
				/>
			</div>
		</>
	);
};

export default Home;
