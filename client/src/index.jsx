import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';
import '../dist/style.css'
import Autocomplete from 'react-autocomplete'

import Zipcode from './components/Zipcode.jsx';
import Places from './components/Places.jsx';
import Results from './components/Results.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fulladdress: '',
			lat: '',
			lng: '', 
			searchResults: []
		}

		this.handleLatLgn = this.handleLatLgn.bind(this);
		this.handleYelpSearch = this.handleYelpSearch.bind(this);
	}

	handleLatLgn(targetAddress, targetLat, targetLng) {
		this.setState({fulladdress: targetAddress, lat: targetLat, lng: targetLng}, () => this.handleYelpSearch())
	}

	handleYelpSearch() {
		console.log('fetching yelp results...')
		const body = {lat: this.state.lat, lng: this.state.lng}
		axios.post('/searchPlaces', body)
		.then(response => {
			console.log(response.data.businesses)
			this.setState({searchResults: response.data.businesses})
		})
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div className="App">
					<NavBar />
					<Zipcode handleLatLgn={this.handleLatLgn} handleYelpSearch={this.handleYelpSearch}/>
					<Places lat={this.state.lat} lng={this.state.lng} fulladdress={this.state.fulladdress}/>
					<Results searchResults={this.state.searchResults}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 