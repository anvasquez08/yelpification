import React from 'react';
import axios from 'axios';
import history from '../History.jsx';
import {Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardImg, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Bookmarks extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			bookmarks: []
		}
		this.handleStateChange = this.handleStateChange.bind(this);
		this.deletePlace = this.deletePlace.bind(this);
		this.fetchLatestBookmarks = this.fetchLatestBookmarks.bind(this);
	}

	componentDidMount() {
		this.fetchLatestBookmarks()
	}

	handleStateChange(data) {
		this.setState({bookmarks: data})
	}

	deletePlace(id) {
		axios.delete(`/preferences/${this.props.signedinUser}/${id}`)
		.then(response => this.fetchLatestBookmarks())
		.catch(err => console.log(err))
	}

	fetchLatestBookmarks() {
	  axios.get(`/preferences/${this.props.signedinUser}`)
		.then(response => this.handleStateChange(response.data[0].Preferences))
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
			<CardGroup>
			<h2>Saved Bookmarks:</h2>
			<br></br>
			  {
			    this.state.bookmarks.map((place, idx) => {
			    	return (
						 <Col sm="3"key={idx}>
						    <Card style={{width: "18rem"}}>
						  	  <CardImg top width="100%" src={place.image_url} className="img-responsive"/>
						      <CardBody style={{height: "10rem"}}>
						         <CardTitle><a href={place.url}>{place.name}</a></CardTitle>
						          <CardSubtitle>Yelp Rating: {place.rating}</CardSubtitle>
						           <CardText>{place.location_address1} 
						          <br></br>
						          {place.location_city}, {place.location_zip_code}</CardText>
						          <Button className="Button-cards" onClick={() => this.deletePlace(place.id)}>Delete</Button>
							   </CardBody>
						    </Card>
						</Col>
			    	)
			    })
			  }
		</CardGroup>
		</div>
		)
	}
}

export default withRouter(Bookmarks);

