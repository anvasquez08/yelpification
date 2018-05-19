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

	viewChanger() {

	}

	render() {
		const place = this.props.yelpResultsForId[0]
		const name = place.name	
		const address = place.location.display_address.join(', ')
		const {Y2015, Y2016, Y2017, Y2018} = this.state

		return (
				<div className="container-fluid">
					<div className="col-lg-12">

					    <h1 className="Title">{name}</h1>
					    <h6 className="Address">{address}</h6>
							
							<div className="row" style={{fontSize: '15px'}}>
								<Information yelpResultsForId={this.props.yelpResultsForId}/>
											<div className="btn-group btn-group-sm" role="group" aria-label="Basic example" style={{float: "right", padding: '5px'}}>
											{ Y2018 && <button type="button" className="btn btn-secondary">2018</button> }
											{ Y2017 && <button type="button" className="btn btn-secondary">2017</button> }
											{ Y2016 && <button type="button" className="btn btn-secondary">2016</button> }
											{ Y2015 && <button type="button" className="btn btn-secondary">2015</button> }
											</div>

								<Chart year={this.state.Y2018}/>

							</div>

							<Button className="Button-details" onClick={() => this.props.savePlaceToDB(business)}>Save to Bookmarks</Button>
							<Button className="Button-details" onClick={() => this.props.handleViewStateChange('restaurantResults')}>Back to search results...</Button>		
					</div>
				</div>
		)
	}
}

export default RestaurantDetails;

// Restaurant received an A inspection grade (i.e. a grade of 13 points or below)
// restaurant received 14 or more violation points (the equivalent of a "B" or worse) during an initial un-graded inspection or during a follow-up inspection, in which case the restaurant would likely display a grade-pending card, instead of a "B" or "C". 





