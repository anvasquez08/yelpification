import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
import axios from 'axios';
import {
	Container, Row, Col,
	Card, CardBody, CardTitle, 
  Button, 
	Input,
} from 'reactstrap';

class Places extends React.Component{

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
        <div key={item.id} style={{backgroundColor: this.state.isHighlighted ? '#eee' : 'transparent'}}>
          {item.description}
        </div>   
     )
	}
	
	getItemValue(item){
    return item.description;
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
				  	<Button className="Button" onClick={() => console.log(name)}>Search</Button>    									
				</Col>	
			</div>	
		)
	}
}

export default Places;

/*

	old 
    render() {
		const {value, autocompleteData} = this.state;
		return (

				<Container fluid>
					{console.log(this.state.autocompleteData)}
			  	<br></br>
				  	<Row>
				  	<Col sm="5">
				  		<Card className="Card">
				  			<CardBody>
				  				<CardTitle>Places</CardTitle>
									<Autocomplete
							   		items={autocompleteData}
							      getItemValue={this.getItemValue}
							      renderItem={(item) => this.renderItem(item)}
							      value={value}
							      onChange={this.onChange}
							      onSelect={val => this.onStateChange('value', val)}/>
				  				<Button className="Button" onClick={() => console.log(name)}>Add To My Places</Button>    									
				  				<Button className="Button" onClick={() => console.log(name)}>Let's move on</Button>
				  			</CardBody>
				  		</Card>
				  	</Col>
				  	</Row>			
				</Container>
		)
	}
}

*/
