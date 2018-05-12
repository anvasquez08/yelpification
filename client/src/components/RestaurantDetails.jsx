import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class RestaurantDetails extends React.Component {


	render() {
		return (
			<div>
			<Button onClick={() => this.props.handleViewChange()}>Back to search results...</Button>

			{
				this.props.yelpResultsForId.map((business, idx) => {
					return (
									<div key={idx}>
										<div >{business.name}</div>
									  <div>{business.price}</div>
									 	<div>{business.categories[0].title}</div>
										<div>{business.display_phone}</div>
							    	<div>{business.display_address}</div>
								    <div>{business.rating}</div>
										<div>{business.reviews.reviews[0].text}</div>
										<div>{business.reviews.reviews[1].text}</div>
										<div>{business.reviews.reviews[2].text}</div>
									</div>
						)
				})
			}
			</div>
		)
	}
}

export default RestaurantDetails;