import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class RestaurantDetails extends React.Component {


	render() {
		return (
			<div>
			<Button onClick={() => this.props.handleViewChange()}>Back to search results...</Button>
			</div>
		)
	}
}

export default RestaurantDetails;