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
import Bookmarks from './components/Bookmarks.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			view: 'restaurantResults',
			fulladdress: '',
			lat: '',
			lng: '', 
			searchResults: [], 
			yelpRestaurantID: '',
			yelpResultsForId: [],
			signedinUser: 'Ana' // need to udpdate when authentication impletmented
		}

		this.handleLatLgn = this.handleLatLgn.bind(this);
		this.handleYelpRestaurantID = this.handleYelpRestaurantID.bind(this);
		this.handleYelpResultsForId = this.handleYelpResultsForId.bind(this);
		this.handleYelpIDSearch = this.handleYelpIDSearch.bind(this);
		this.handleYelpSearch = this.handleYelpSearch.bind(this);
		this.savePlaceToDB = this.savePlaceToDB.bind(this);
		this.renderViewChanger = this.renderViewChanger.bind(this);
		this.handleViewStateChange = this.handleViewStateChange.bind(this);
	}

	//**   RENDERING RESTAURANT RESULTS COMPONENT

	handleLatLgn(targetAddress, targetLat, targetLng) {
		this.setState({fulladdress: targetAddress, lat: targetLat, lng: targetLng}, () => this.handleYelpSearch())
	}

	handleYelpSearch() {
		console.log('fetching yelp results...')
		const body = {lat: this.state.lat, lng: this.state.lng}
		axios.post('/searchPlaces', body)
		.then(response => {
			console.log(response.data.businesses)
			this.setState({searchResults: response.data.businesses}, () => this.handleViewStateChange('restaurantResults'))
		})
		.catch(err => console.log(err))
	}

	//**   RENDERING RESTAURANT DETAILS COMPONENT

	handleYelpRestaurantID(id) {
		this.setState({yelpRestaurantID: id}, () => this.handleYelpIDSearch())
	}

	handleYelpIDSearch() {
		axios.post(`/searchId/${this.state.yelpRestaurantID}`)
		.then(res => {
			console.log('results for business', res.data)
			this.handleYelpResultsForId(res.data)
		})
		.catch(err => console.log(err))
	}

	handleYelpResultsForId(data) {
		let newResults = [data]
		this.setState({yelpResultsForId: newResults}, () => this.handleViewStateChange('details'))
	}

	//**   SAVING TO DB

	savePlaceToDB(place) {
		const {id,  image_url, name, url, rating } = place
		const body ={
		  id: id,
		  image_url: image_url,
		  name: name,
		  url: url,
		  rating: rating,
		  location_address1: place.location['address1'],
		  location_city: place.location['city'], 
		  location_zip_code: place.location['zip_code']
		} 
		console.log('this is the body', body)
		axios.post(`/preferences/${this.state.signedinUser}`, body)
		.then(response => {
			console.log(response)
			console.log('saved to DB')
		})
		.catch(err => console.log(err))
	}

	//**   CHANGING VIEWS

	handleViewStateChange(view) {
		this.setState({view: view})
		this.renderViewChanger()
	}

  renderViewChanger() {
		const { view } = this.state;

		if (view === 'restaurantResults') {
			return <RestaurantResults 
				searchResults={this.state.searchResults} 
				handleYelpRestaurantID={this.handleYelpRestaurantID}
				savePlaceToDB={this.savePlaceToDB}/> 

		} else if (view === 'details') {
			 return <RestaurantDetails
				handleViewStateChange={this.handleViewStateChange}
				yelpResultsForId={this.state.yelpResultsForId}
				savePlaceToDB={this.savePlaceToDB}/>

		} else if (view === 'bookmarks') {
			return <Bookmarks signedinUser={this.state.signedinUser}/>
		}
	}

	render() {
		return (
			<div className="App">
					<NavBar 					handleViewStateChange={this.handleViewStateChange}/>
					<SearchByAddress 
														handleLatLgn={this.handleLatLgn} 
													 	handleYelpSearch={this.handleYelpSearch}/>
					<SearchByBusinessName 
														lat={this.state.lat} lng={this.state.lng} 
														fulladdress={this.state.fulladdress}/>
					<div> 
					{this.renderViewChanger()}
					</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
 