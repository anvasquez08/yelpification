import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';
import '../dist/style.css'
import Autocomplete from 'react-autocomplete'

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
			fulladdress: '',
			lat: '',
			lng: '' 
		}
		this.handleLatLgn = this.handleLatLgn.bind(this)
	}

	handleLatLgn(targetAddress, targetLat, targetLng) {
		this.setState({fulladdress: targetAddress, lat: targetLat, lng: targetLng})
	}

	render() {
		return (
			<div className="App">
					<NavBar />
					<Zipcode handleLatLgn={this.handleLatLgn}/>
					<Places lat={this.state.lat} lng={this.state.lng} fulladdress={this.state.fulladdress}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 