import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
import axios from 'axios'; 
import PropTypes from 'prop-types'
import { Container, Row, Col, Card, CardBody, CardTitle, Button, Input} from 'reactstrap';

class SearchByBusinessName extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			value: '',
			autocompleteData: [], 
			isHighlighted: false
		}

		this.onChange = this.onChange.bind(this);
		this.onStateChange = this.onStateChange.bind(this);
	  	this.autoCompleteBody = this.autoCompleteBody.bind(this);
		this.autoComplete = this.autoComplete.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.getItemValue = this.getItemValue.bind(this);
		this.getYelpProfile = this.getYelpProfile.bind(this);
	}

	onChange(event) { 
		this.setState({value: event.target.value}) 
		this.autoComplete() 
	}

	onStateChange(key, value) {
		this.setState({[key]: value})
	}

	autoCompleteBody() {
		return {
			input: this.state.value,
			lat: this.props.lat, 
			lng: this.props.lng, 
		}
	}

	autoComplete() {		
		axios.post(`/places`, this.autoCompleteBody())
		.then(response => this.onStateChange('autocompleteData', response.data))
		.catch(err => console.log(err))
	}

	renderItem(item) {
		return (
        <div key={item.id} style={ this.state.isHighlighted ? {backgroundColor: '#eee'} : {backgroundColor:'transparent'}}>
          {item.description}
        </div>   
     )
	}
	
	getItemValue(item){
    return item.description;
  }

  getYelpProfile() {
  	console.log(this.state.value)
  	const body = {value: this.state.value}

  	axios.post('/businessSearch', body)
  	.then(response => {
  		console.log(response)
  	})
  	.catch(err => console.log(err))
  }

	render() {
		const {value, autocompleteData} = this.state;
		return (
			<div className="text">
				<Col sm="5">
				Search by Name 
				<br></br>
					<Autocomplete
						items={autocompleteData}
						getItemValue={this.getItemValue}
						renderItem={(item) => this.renderItem(item)}
						value={value}
						onChange={this.onChange}
						onSelect={val => this.onStateChange('value', val)}/>
				  	<Button className="Button" onClick={() => this.getYelpProfile()}>Search</Button>    									
				</Col>	
			</div>	
		)
	}
}

export default SearchByBusinessName;

SearchByBusinessName.PropTypes = {
	autocompleteData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

