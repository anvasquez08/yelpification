import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';
import '../dist/style.css'
import Autocomplete from 'react-autocomplete'

import SearchByAddress from './components/SearchByAddress.jsx';
import SearchByBusinessName from './components/SearchByBusinessName.jsx';
import RestaurantResults from './components/RestaurantResults.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fulladdress: '',
			lat: '',
			lng: '', 
			searchResults: [], 
			yelpRestaurantID: '',
			yelpResultsForId: [],
			viewRestaurantDetails: false
		}

		this.handleLatLgn = this.handleLatLgn.bind(this);
		this.handleYelpRestaurantID = this.handleYelpRestaurantID.bind(this);
		this.handleViewChange = this.handleViewChange.bind(this);
		this.handleYelpResultsForId = this.handleYelpResultsForId.bind(this);
		this.handleYelpIDSearch = this.handleYelpIDSearch.bind(this);
		this.handleYelpSearch = this.handleYelpSearch.bind(this);
	}

	handleLatLgn(targetAddress, targetLat, targetLng) {
		this.setState({fulladdress: targetAddress, lat: targetLat, lng: targetLng}, () => this.handleYelpSearch())
	}

	handleYelpRestaurantID(id) {
		this.setState({yelpRestaurantID: id}, () => this.handleYelpIDSearch())
	}

	handleViewChange() {
		this.setState({viewRestaurantDetails: !this.state.viewRestaurantDetails})
	}

	handleYelpResultsForId(data) {
		let newResults = [data]
		this.setState({yelpResultsForId: newResults}, () => this.handleViewChange())
	}

	handleYelpIDSearch() {
		axios.post(`/searchId/${this.state.yelpRestaurantID}`)
		.then(res => {
			console.log('results for business', res.data)
			this.handleYelpResultsForId(res.data)
		})
		.catch(err => console.log(err))
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
					<SearchByAddress handleLatLgn={this.handleLatLgn} handleYelpSearch={this.handleYelpSearch}/>
					<SearchByBusinessName lat={this.state.lat} lng={this.state.lng} fulladdress={this.state.fulladdress}/>
					{
						this.state.viewRestaurantDetails === true ? (
					      <RestaurantDetails
					      	handleViewChange={this.handleViewChange}
					      	yelpResultsForId={this.state.yelpResultsForId}/>
							) : (
						  <RestaurantResults 
							searchResults={this.state.searchResults} 
							handleYelpRestaurantID={this.handleYelpRestaurantID}/>
						)
					}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 