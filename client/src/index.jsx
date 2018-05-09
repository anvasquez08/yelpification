
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';
import '../dist/style.css'

import {
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch, 
	History
} from "react-router-dom";

import Zipcode from './components/Zipcode.jsx';
import Places from './components/Places.jsx';
// import Signup from './components/Signup.jsx';
// import Favorites from './components/Favorites.jsx';
// import Welcome from './components/Welcome.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lat: '',
			lng: '' 
		}
		this.handleLatLgn = this.handleLatLgn.bind(this)
	}

	handleLatLgn(targetLat, targetLng) {
		this.setState({lat: targetLat, lng: targetLng})
	}

	render() {
		return (
			<div className="App">
					<NavBar />
					<Zipcode handleLatLgn={this.handleLatLgn}/>
					<Places lat={this.state.lat} lng={this.state.lng}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 