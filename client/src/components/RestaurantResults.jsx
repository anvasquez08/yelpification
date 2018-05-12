import React from 'react';
import axios from 'axios';
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardImg, Button } from 'reactstrap';

class RestaurantResults extends React.Component{

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<CardGroup>
			<br></br>
			<br></br>
			  {
			    this.props.searchResults && 
			    this.props.searchResults.map((place, idx) => {
			    	return (
						 <Col sm="3"key={idx}>
						    <Card style={{width: "18rem"}}>
						  	  <CardImg top width="100%" src={place.image_url} className="img-responsive"/>
						      <CardBody style={{height: "10rem"}}>
						          <CardTitle><a href={place.url}>{place.name}</a></CardTitle>
						          <CardSubtitle>Yelp Rating: {place.rating}</CardSubtitle>
						          <CardText>{place.location.address1} 
						          <br></br>
						          {place.location.city}, {place.location.zip_code}</CardText>
						          <Button className="Button-cards" onClick={() => this.props.handleYelpRestaurantID(place.id)}>Profile</Button>
						          <Button className="Button-cards" onClick={() => this.props.savePlaceToDB(place)}> Save </Button>
							   </CardBody>
						    </Card>
						</Col>
			    	)
			    })
			  }
		</CardGroup>

		)
	}
}

export default RestaurantResults;

			// const {username} = req.params;
			// const { id, image_url, name, url, rating, location_address1, location_city, location_zip_code} = req.body;	
			// User.find({where: {username: username}}).then(user => {
			// 	Preferences.create({
			// 		id: id, 
			// 		image_url: image_url, 
			// 		name: name,
			// 		url: url, 
			// 		rating: rating, 
			// 		location_address1: location_address1, 
			// 		location_city: location_city, 
			// 		location_zip_code: location_zip_code
					
			// 		yelpID: yelpID,
			// 		name: name,
			// 		alias: alias,