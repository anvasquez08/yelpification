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
			zipcode: '', 
			cardColor: '#A292A1'
		}
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.fetchLatLong = this.fetchLatLong.bind(this);
	}

	onChange(event) {
	  event.preventDefault()
	  this.setState({[event.target.name]: event.target.value})
	}

	handleClick() {
		this.fetchLatLong()
		this.setState({
			cardColor: '#E1A6AC', 
			address: '',
			zipcode: ''
		})
	}

	fetchLatLong() {
		const body = {address: this.state.address, zipcode: this.state.zipcode}
		axios.post('/geocode', body)
			.then(response => {
				const fulladdress = response.data.fulladdress;
				const lat = response.data.coordinates.lat;
				const lgn = response.data.coordinates.lng;
				this.props.handleLatLgn(fulladdress, lat, lgn)
			})
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
								<Input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.onChange}/>
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
