import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import Information from './Information.jsx';
import Chart from './Chart.jsx';

class RestaurantDetails extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			Y2015: [],
			Y2016: [],
			Y2017: [],
			Y2018: []
		}
	}

	componentDidMount() {
		let d1 = this.props.yelpResultsForId[0].healthRating[0]['2015']
		this.setState({Y2015: d1})
		let d2 = this.props.yelpResultsForId[0].healthRating[0]['2016']
		this.setState({Y2016: d2})
		let d3 = this.props.yelpResultsForId[0].healthRating[0]['2017']
		this.setState({Y2017: d3})
		let d4 = this.props.yelpResultsForId[0].healthRating[0]['2018']
		this.setState({Y2018: d4})
	}

	render() {
		const place = this.props.yelpResultsForId[0]
		const name = place.name	
		const address = place.location.display_address.join(', ')

		return (
				<div className="container-fluid">
					<div className="col-lg-12">

					    <h1 className="Title">{name}</h1>
					    <h6 className="Address">{address}</h6>
							
							<div className="row">
								<Information yelpResultsForId={this.props.yelpResultsForId}/>
								<Chart information={this.state}/>
							</div>

							<Button className="Button-details" onClick={() => this.props.savePlaceToDB(business)}>Save to Bookmarks</Button>
							<Button className="Button-details" onClick={() => this.props.handleViewStateChange('restaurantResults')}>Back to search results...</Button>		
					</div>
				</div>
		)
	}
}

export default RestaurantDetails;


// 											  {
// 											  	this.state['2015'].map((data, idx) => {
// 											  		return (
// 													   <tbody>
// 													    <tr>
// 													      <th scope="row">{data.inspection_date}</th>
// 													      <td>{data.healthRating[0]}</td>
// 													      <td>{data.score[0]}</td>

// 													      {
// 													      	data.violations.map((singleViolation) => {
// 													      		return (
// 													     					<td colSpan="2">{singleViolation.violation_description}</td>
// 													      			)
// 													      	})
// 													      }

// 													    </tr>
// 													  </tbody>
// 													  )
// 								  				})
// 											  }

// Restaurant received an A inspection grade (i.e. a grade of 13 points or below)
// restaurant received 14 or more violation points (the equivalent of a "B" or worse) during an initial un-graded inspection or during a follow-up inspection, in which case the restaurant would likely display a grade-pending card, instead of a "B" or "C". 





