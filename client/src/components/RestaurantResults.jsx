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
						    <Card style={{width: "18rem"}} >
						  	  <CardImg top width="100%" src={place.image_url} className="img-responsive"/>
						      <div style={{height: "10rem"}} className="card-body" style={{"marginLeft": "5px"}}>
						          <div ><a href={place.url}>{place.name}</a></div>
						          <div >Yelp Rating: {place.rating}</div>
						          <div>{place.location.address1} 
						          <br></br>
						          {place.location.city}, {place.location.zip_code}</div>
						          <button type="button" className="btn-sm" style={{  "marginTop": "5px", "marginBottom": "5px","marginRight": "5px","backgroundColor": "#F7F5F3"}}
						          	onClick={() => this.props.handleYelpRestaurantID(place.id)}>Profile</button>
						          <button type="button" className="btn-sm" style={{  "marginTop": "5px", "marginBottom": "5px","marginRight": "5px","marginLeft": "5px","backgroundColor": "#F7F5F3"}}
						          	onClick={() => this.props.savePlaceToDB(place)}> Save </button>
							   </div>
						    </Card>
						</Col>
			    	)
			    })
			  }
		</CardGroup>

		)
	}
}

export default RestaurantResults; //"Button-cards
