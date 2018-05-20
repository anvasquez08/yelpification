import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Autocomplete from 'react-autocomplete'
import {Navbar, NavbarBrand} from 'reactstrap';
import {Router, Switch, Redirect} from 'react-router-dom'

import Nav from './Nav.jsx';
import Bookmarks from './component-nav/Bookmarks.jsx';
import Login from  './component-nav/Login.jsx';
import Signup from  './component-nav/Signup.jsx';

import SearchBars from './SearchBars.jsx';
import SearchByAddress from './component-search-bars/SearchByAddress.jsx';
import SearchByBusinessName from './component-search-bars/SearchByBusinessName.jsx';

import Results from './Results.jsx';
import Profile from './Profile.jsx';
import history from './History.jsx';

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
			signedinUser: 'Ana' // need to udpdate when authentication impletmented
		}

		this.handleLatLgn = this.handleLatLgn.bind(this);
		this.handleSearchResults = this.handleSearchResults.bind(this);
		this.handleYelpRestaurantID = this.handleYelpRestaurantID.bind(this);
		this.handleYelpResultsForId = this.handleYelpResultsForId.bind(this);
		this.handleYelpIDSearch = this.handleYelpIDSearch.bind(this);
		this.handleYelpSearch = this.handleYelpSearch.bind(this);
		this.savePlaceToDB = this.savePlaceToDB.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
	}

	//**   RENDERING RESTAURANT RESULTS COMPONENT
	handleLatLgn(targetAddress, targetLat, targetLng) {
		this.setState({fulladdress: targetAddress, lat: targetLat, lng: targetLng}, 
			() => this.handleYelpSearch())
	}

	handleSearchResults(data) {
		this.setState({searchResults: data}, 
			() => history.push({pathname: '/results'}))
	}

	handleUsername(data) {
		this.setState({signedinUser: data})
	}

	handleYelpSearch() {
		const body = {lat: this.state.lat, lng: this.state.lng}
		axios.post('/searchPlaces', body)
		.then(response => {
			this.setState({searchResults: response.data}, 
				() => history.push({pathname: '/results'}))
		})
		.catch(err => console.log('handle yelp search error: ', err))
	}

	//**   RENDERING RESTAURANT DETAILS COMPONENT
	handleYelpRestaurantID(id) {
		this.setState({yelpRestaurantID: id}, () => this.handleYelpIDSearch())
	}

	handleYelpIDSearch() {
		axios.post(`/searchId/${this.state.yelpRestaurantID}`)
		.then(res => this.handleYelpResultsForId(res.data))
		.catch(err => console.log('handle yelp id search error: ', err))
	}

	handleYelpResultsForId(data) {
		let newResults = [data]
		this.setState({yelpResultsForId: newResults}, () => history.push({pathname: '/profile'}))
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
		console.log('data being sent: ', body)
		axios.post(`/preferences/${this.state.signedinUser}`, body)
		.then(response => console.log(response.data))
		.catch(err => console.log(err))
	}

	render() {
		return (
			<Router history={history}>
				<div>
					  <Nav history={history}/>

					  <SearchBars handleLatLgn={this.handleLatLgn} 
					  			  handleYelpSearch={this.handleYelpSearch}
					  			  lat={this.state.lat} lng={this.state.lng}
					  			  fulladdress={this.state.fulladdress}
					  			  handleSearchResults={this.handleSearchResults}/>

						<Switch>
								<Bookmarks path="/bookmarks" component={Bookmarks} signedinUser={this.state.signedinUser}/>
								<Login path="/login" component={Login}
									signedinUser={this.state.signedinUser}
									handleUsername={this.handleUsername}/>
								<Signup path="/signup" component={Signup}
									signedinUser={this.state.signedinUser}
									handleUsername={this.handleUsername}/>
								<Results path="/results" component={Results}
									searchResults={this.state.searchResults} 
									handleYelpRestaurantID={this.handleYelpRestaurantID}
									savePlaceToDB={this.savePlaceToDB}/> 
								<Profile path="/profile" component={Profile}
									handleViewStateChange={this.handleViewStateChange}
									yelpResultsForId={this.state.yelpResultsForId}
									savePlaceToDB={this.savePlaceToDB}/>	
						</Switch>
				</div>
			</Router>

		)
	}
}

export default App;
