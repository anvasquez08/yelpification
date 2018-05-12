import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class RestaurantDetails extends React.Component {


	render() {
		return (
			<div style={{ width:" 700px", padding: "20px", border: "5px", margin: "0"}}>			
				<div>
					<div>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
							{
								this.props.yelpResultsForId.map((business, idx) => {
									return (

										<dl className="row" key={idx} >
										  <dt className="col-sm-3">Name</dt>
										  <dd className="col-sm-9">{business.name}</dd>

										  <dt className="col-sm-3">Category</dt>
										  <dd className="col-sm-9">{business.categories[0].title}</dd>

										  <dt className="col-sm-3">Price</dt>
										  <dd className="col-sm-9">{business.price}</dd>

										  <dt className="col-sm-3">Phone Number</dt>
										  <dd className="col-sm-9">{business.display_phone}</dd>

										  <dt className="col-sm-3">Rating</dt>
										  <dd className="col-sm-9">{business.rating}</dd>

										  <dt className="col-sm-3">Reviews</dt>
										  <dd className="col-sm-9">
										    
										  	<dl className="row">
											    <dt className="col-sm-4">{business.reviews.reviews[0].user.name}</dt>
											    <dd className="col-sm-8">{business.reviews.reviews[0].text}</dd>
										  	</dl>
											  <dl className="row">
											    <dt className="col-sm-4">{business.reviews.reviews[1].user.name}</dt>
											    <dd className="col-sm-8">{business.reviews.reviews[1].text}</dd>
											  </dl>
										    <dl className="row">
										      <dt className="col-sm-4">{business.reviews.reviews[2].user.name}</dt>
										      <dd className="col-sm-8">{business.reviews.reviews[2].text}</dd>

										    </dl>
										  	<Button className="Button" style={{ "backgroundColor": "#d9534f", color: "#ECF0F1"}} onClick={() => this.props.savePlaceToDB(business)}>Save to Bookmarks</Button>
									       <Button className="Button" style={{ "backgroundColor": "#d9534f", color: "#ECF0F1"}} onClick={() => this.props.handleViewStateChange('restaurantResults')}>Back to search results...</Button>
										  </dd>
										</dl>
									)
								})
							}
					</div>
				</div>
			</div>
		)
	}
}

export default RestaurantDetails;