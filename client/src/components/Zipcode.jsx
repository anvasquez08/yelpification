import React, { Component } from 'react';
import {
	Container, Row, Col,
	Card, CardBody,
  CardTitle, 
  Button, 
	Input
} from 'reactstrap';
import axios from 'axios';

class Zipcode extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			address: '', 
			cardColor: '#A292A1'
		}
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.fetchLatLong = this.fetchLatLong.bind(this);
	}

	onChange(event) {
	  this.setState({[event.target.name]: event.target.value})
	}

	handleClick() {
		this.setState({
			cardColor:  '#E1A6AC'
		}, () =>this.fetchLatLong())
	}

	fetchLatLong() {
		const body = {address: this.state.address}
		axios.post('/geocode', body)
			.then(response => {
				let lat = response.data.lat;
				let lgn = response.data.lng;
				this.props.handleLatLgn(lat, lgn)
			}).then(res => console.log('saved'))
			.catch(err => console.log(err))
	}

	render() {
		return (
  			<Container fluid>
  			 <br></br>
  			  <Row>
      		<Col sm="5">
						<Card className="Card" style={{backgroundColor: this.state.cardColor}}>
							<CardBody>
								<CardTitle>Your Office Location</CardTitle>
								<Input type="text" name="address" value={this.state.address} placeholder="Address" onChange={this.onChange}/>
								<Button className="Button" onClick={() => this.handleClick()}>Next</Button>
							</CardBody>
						</Card>
				  </Col>
   			  </Row>
    		</Container>
		)
	}
}

export default Zipcode;
