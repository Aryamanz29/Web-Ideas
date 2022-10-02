import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import CompA from './CompA';
import CompB from './CompB';
import Footer from './Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/service' component={Service} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/about' component={About} />
				<Route exact path='/netflix' component={CompA} />
				<Route exact path='/prime' component={CompB} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
