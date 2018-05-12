import React from 'react';
import { Navbar, CardGroup } from 'reactstrap';
class Bookmarks extends React.Component{

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<CardGroup>
			<br></br>
			<br></br>
			<div>Hello World</div>
			  {
			   //  this.props.searchResults && 
			   //  this.props.searchResults.map((place, idx) => {
			   //  	return (
						//  <Col sm="3"key={idx}>
						//     <Card style={{width: "18rem"}}>
						//   	  <CardImg top width="100%" src={place.image_url} className="img-responsive"/>
						//       <CardBody style={{height: "10rem"}}>
						//           <CardTitle><a href={place.url}>{place.name}</a></CardTitle>
						//           <CardSubtitle>Yelp Rating: {place.rating}</CardSubtitle>
						//           <CardText>{place.location.address1} 
						//           <br></br>
						//           {place.location.city}, {place.location.zip_code}</CardText>
						//           <Button className="Button-cards" onClick={() => this.props.handleYelpRestaurantID(place.id)}>Profile</Button>
						//           <Button className="Button-cards" onClick={() => this.props.savePlaceToDB(place)}> Save </Button>
						// 	   </CardBody>
						//     </Card>
						// </Col>
			   //  	)
			   //  })
			  }
		</CardGroup>

		)
	}
}

export default Bookmarks;

// route get: /preferences/:username
// route delete '/preferences/:username/:id
// view all preferences from db
