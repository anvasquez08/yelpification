import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class RestaurantDetails extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div className="container-fluid">
					<div className="col-sm-9">
					    {this.props.yelpResultsForId[0].name}
					    <span className="glyphicon glyphicon-search"></span>

							<div className="row">
								<div className="col-xs-8 col-sm-6">
								    {
										this.props.yelpResultsForId.map((business, idx) => {
											return (

												<dl className="row" key={idx} >
												  <dt className="col-sm-2">Name</dt>
												  <dd className="col-sm-9">{business.name}</dd>

												  <dt className="col-sm-2">Category</dt>
												  <dd className="col-sm-10">{business.categories[0].title}</dd>

												  <dt className="col-sm-2">Price</dt>
												  <dd className="col-sm-10">{business.price}</dd>

												  <dt className="col-sm-2">Phone Number</dt>
												  <dd className="col-sm-10">{business.display_phone}</dd>

												  <dt className="col-sm-2">Rating</dt>
												  <dd className="col-sm-10">{business.rating}</dd>

												  <dt className="col-sm-2">Reviews</dt>
												  <dd className="col-sm-10">					    
												  	<dl className="row">
													    <dd className="col-sm-9">{business.reviews.reviews[0].user.name}: {business.reviews.reviews[0].text}</dd>
												  	</dl>
													  <dl className="row">
													    <dd className="col-sm-9">{business.reviews.reviews[1].user.name}: {business.reviews.reviews[1].text}</dd>
													  </dl>
												    <dl className="row">
												      <dd className="col-sm-9">{business.reviews.reviews[2].user.name}: {business.reviews.reviews[2].text}</dd>
												    </dl>
												  	<Button className="Button" style={{ "backgroundColor": "#d9534f", color: "#ECF0F1"}} onClick={() => this.props.savePlaceToDB(business)}>Save to Bookmarks</Button>
											       <Button className="Button" style={{ "backgroundColor": "#d9534f", color: "#ECF0F1"}} onClick={() => this.props.handleViewStateChange('restaurantResults')}>Back to search results...</Button>
												  </dd>
												</dl>
											)
										})
									}
								</div>
								<div className="col-xs-4 col-sm-6">
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
													    <dd className="col-sm-9">{business.reviews.reviews[0].user.name}: {business.reviews.reviews[0].text}</dd>
												  	</dl>
													  <dl className="row">
													    <dd className="col-sm-9">{business.reviews.reviews[1].user.name}: {business.reviews.reviews[1].text}</dd>
													  </dl>
												    <dl className="row">
												      <dd className="col-sm-9">{business.reviews.reviews[2].user.name}: {business.reviews.reviews[2].text}</dd>
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
				</div>
		)
	}
}

export default RestaurantDetails;






/*


Restaurant received an A inspection grade (i.e. a grade of 13 points or below)
restaurant received 14 or more violation points (the equivalent of a "B" or worse) during an initial un-graded inspection or during a follow-up inspection, in which case the restaurant would likely display a grade-pending card, instead of a "B" or "C". 



// inspection_date
// grade A,B C
// inspection_date

// violation_description
// score

/*
class RestaurantDetails extends React.Component {


	render() {
		return (
			<div style={{ width:" 700px", padding: "20px", border: "5px", margin: "0"}}>			
				<div>
					<div>
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
											    <dd className="col-sm-9">{business.reviews.reviews[0].user.name}: {business.reviews.reviews[0].text}</dd>
										  	</dl>
											  <dl className="row">
											    <dd className="col-sm-9">{business.reviews.reviews[1].user.name}: {business.reviews.reviews[1].text}</dd>
											  </dl>
										    <dl className="row">
										      <dd className="col-sm-9">{business.reviews.reviews[2].user.name}: {business.reviews.reviews[2].text}</dd>
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
*/





