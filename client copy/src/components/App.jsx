import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap';
import '../dist/style.css'
import Autocomplete from 'react-autocomplete'

import SearchByAddress from './SearchByAddress.jsx';
import SearchByBusinessName from './SearchByBusinessName.jsx';
import RestaurantResults from './RestaurantResults.jsx';
import RestaurantDetails from './RestaurantDetails.jsx';
import Bookmarks from './Bookmarks.jsx';
import NavBar from './NavBar.jsx';
import Login from  './Login.jsx';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

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
		this.handleSearchResults = this.handleSearchResults.bind(this);
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

	handleSearchResults(data) {this.setState({searchResults: data}, () => this.handleViewStateChange('restaurantResults') )}

	handleYelpSearch() {
		console.log('fetching yelp results...')
		const body = {lat: this.state.lat, lng: this.state.lng}
		console.log(body)
		axios.post('/searchPlaces', body)
		.then(response => {
			// console.log(response.data)
			this.setState({searchResults: response.data}, () => this.handleViewStateChange('restaurantResults'))
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
		} else if (view === 'login') {
			return <Login signedinUser={this.state.signedinUser}/>
		}
	}

	render() {
		return (
			<div>
				<NavBar handleViewStateChange={this.handleViewStateChange}/>
				
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<SearchByAddress handleLatLgn={this.handleLatLgn} 
							  		handleYelpSearch={this.handleYelpSearch}/>
						</div>
						<div className="col-md-6">
							<SearchByBusinessName lat={this.state.lat} lng={this.state.lng} 
									fulladdress={this.state.fulladdress}
									handleSearchResults={this.handleSearchResults}/>
						</div>
					</div>				
				</div>


				<div> {this.renderViewChanger()}</div>

			</div>
		)
	}
}

export default App;