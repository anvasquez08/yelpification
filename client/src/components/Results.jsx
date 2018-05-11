import React from 'react';
import axios from 'axios';
import { Col, Card, CardBody, CardTitle, 
	CardSubtitle, CardText, CardGroup, CardImg, Button } from 'reactstrap';

class Results extends React.Component{

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<CardGroup>
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
						          <Button>Button</Button>
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

export default Results;