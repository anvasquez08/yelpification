import React from 'react';
import { Col, Button, Input } from 'reactstrap';
import axios from 'axios';

class SearchByAddress extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			address: '',
			zipcode: ''
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
			<div className="searchBars">		
					<div>Places Nearby</div>
					<Input type="text" name="address" value={this.state.address} placeholder="Street" onChange={this.onChange}/>
					<Input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.onChange}/>
					<Button className="Button" onClick={() => this.handleClick()}>Find a Bite</Button>
		
		    </div>
		)
	}
}

export default SearchByAddress;




