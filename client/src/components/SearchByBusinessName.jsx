import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
import axios from 'axios'; 

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
        <div key={item.id} style={{ background: this.state.isHighlighted ? 'lightgray' : 'white' }}>
          {item.description}
        </div>   
     )
	}
	
	getItemValue(item){
    return item.description;
  }

  getYelpProfile() {
  	const body = {term: this.state.value}

  	axios.post('/searchName', body)
  	.then(response => {
  		console.log('this is the response: ', response.data)
  		this.props.handleSearchResults(response.data)
  		this.setState({value: ''})
  	})
  	.catch(err => console.log(err))
  }

	render() {
		const {value, autocompleteData} = this.state;
		return (
			<div className="searchBars">
				<Col sm="6">
				Search by Name 
			

					<Autocomplete
						inputProps={{ className: 'form-control', placeholder: 'Business', style: { width: '500px'}}} 
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


