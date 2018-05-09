
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';

import {
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch, 
	History
} from "react-router-dom";

import Welcome from './components/Welcome.jsx';
import Search from './components/Search.jsx';
import Zipcode from './components/Zipcode.jsx';
import Signup from './components/Signup.jsx';
import Favorites from './components/Favorites.jsx';
import NavBar from './components/NavBar.jsx';
class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
					<NavBar />
					<Zipcode/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 