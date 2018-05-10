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
			autocompleteData: []
		}

		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.autoCompleteBody = this.autoCompleteBody.bind(this);
		this.onStateChange = this.onStateChange.bind(this);
		this.autoComplete = this.autoComplete.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.getItemValue = this.getItemValue.bind(this);
	}

	onChange(event) { 
		this.setState({value: event.target.value}) 
		this.autoComplete() 
	}

	onSelect(val) {
		this.setState({value: val})
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

	renderItem(item, isHighlighted) {
		return (
        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
        </div>   
     ); 
	}
	 getItemValue(item){
        return `${item.value} - ${item.label}`;
    }

	render() {
		const {searchValue, autocompleteData} = this.state;

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
							        getItemValue={item => item.description}
							        renderItem={(item, highlighted) =>
							          <div
							            key={item.id}
							            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
							          >
							            {item.description}
							          </div>
							        }
							        value={this.state.value}
							        onChange={this.onChange}
							        onSelect={val => this.onStateChange('value', val)}
							      />
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

export default Places;
