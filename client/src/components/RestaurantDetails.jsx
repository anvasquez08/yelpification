import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class RestaurantDetails extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const business = this.props.yelpResultsForId[0]
		const name = this.props.yelpResultsForId[0].name
		const address = this.props.yelpResultsForId[0].location.display_address.join(', ')
		const categories = this.props.yelpResultsForId[0].categories.map(obj => {return obj.title}).join(', ')


		return (
				<div className="container-fluid">
					<div className="col-lg-12">

					    <h1 className="Title">{name}</h1>
					    <h6 className="Address">{address}</h6>

					
					    
					    {console.log(this.props.yelpResultsForId[0])}
							<div className="row">
								<div className="col-lg-6">
								    {
										this.props.yelpResultsForId.map((business, idx) => {
											return (

												<dl className="row" key={idx} >
												  <dt className="col-md-3">Category</dt>
												  <dd className="col-md-9">{categories}</dd>

							 					  <dt className="col-md-3">Open</dt>
												  <dd className="col-md-9">{business.hours[0].is_open_now ? "Yes" : "No"}</dd>

												  <dt className="col-md-3">Price</dt>
												  <dd className="col-md-9">{business.price}</dd>

												  <dt className="col-md-3">Phone Number</dt>
												  <dd className="col-md-9">{business.display_phone}</dd>

												  <dt className="col-md-3">Rating</dt>
												  <dd className="col-md-9">{business.rating}</dd>

												  <dt className="col-md-3">Reviews</dt>
												  <dd className="col-md-9">					    
												  	<dl className="row">
													    <dd className="col-md-10">"{business.reviews.reviews[0].text}"</dd>
												  	</dl>
													  <dl className="row">
													    <dd className="col-md-10">"{business.reviews.reviews[1].text}"</dd>
													  </dl>
												    <dl className="row">
												      <dd className="col-md-10">"{business.reviews.reviews[2].text}"</dd>
												    </dl>
												  </dd>
												</dl>
											)
										})
									}
								</div>
								<div className="col-lg-6">
									        <table className="table table-bordered">
											  <thead>
											    <tr>
											      <th scope="col">#</th>
											      <th scope="col">First</th>
											      <th scope="col">Last</th>
											      <th scope="col">Handle</th>
											    </tr>
											  </thead>
											  <tbody>
											    <tr>
											      <th scope="row">1</th>
											      <td>Mark</td>
											      <td>Otto</td>
											      <td>@mdo</td>
											    </tr>
											    <tr>
											      <th scope="row">2</th>
											      <td>Jacob</td>
											      <td>Thornton</td>
											      <td>@fat</td>
											    </tr>
											    <tr>
											      <th scope="row">3</th>
											      <td colSpan="2">Larry the Bird</td>
											      <td>@twitter</td>
											    </tr>
											  </tbody>
											</table>
											<Button className="Button-details" onClick={() => this.props.savePlaceToDB(business)}>Save to Bookmarks</Button>
											<Button className="Button-details" onClick={() => this.props.handleViewStateChange('restaurantResults')}>Back to search results...</Button>
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





