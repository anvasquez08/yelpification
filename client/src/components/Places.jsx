import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
import axios from 'axios';
import {
	Container, Row, Col,
	Card, CardBody,
  CardTitle, 
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
		this.autoComplete = this.autoComplete.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.getItemValue = this.getItemValue.bind(this);
	}

	onChange(event) { 
		this.setState({value: event.target.value}) 
		this.autoComplete() 
	}

	onSelect(val) { this.setState({value: val}) }

	autoComplete() {		
		const body = {
			input: this.state.value,
			lat: this.props.lat, 
			lng: this.props.lng, 
		}
		console.log('Hitting!!', body)
		axios.post(`/places`, body)
		.then(response => {
			console.log(response.data)
			let data = response.data

			this.setState({autocompleteData: data})
		})
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
			  	<br></br>
				  	<Row>
				  	<Col sm="5">
				  		<Card className="Card" style={{}}>
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
							        onSelect={val => this.setState({value: val}, () => console.log(value))}
							      />
				  				<Button className="Button" onClick={() => console.log(name)}>Search</Button>    									
				  				<Button className="Button" onClick={() => console.log(name)}>Done..Let's move on!</Button>
				  			</CardBody>
				  		</Card>
				  	</Col>
				 		<Col sm="7">
				  	</Col>
				  	</Row>
				</Container>
		)
	}
}

export default Places;

/*
					<Autocomplete
			        items={[
			          { id: 'foo', label: 'foo' },
			          { id: 'bar', label: 'bar' },
			          { id: 'baz', label: 'baz' },
			        ]}
			        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
			        getItemValue={item => item.label}
			        renderItem={(item, highlighted) =>
			          <div
			            key={item.id}
			            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
			          >
			            {item.label}
			          </div>
			        }
			        value={this.state.value}
			        onChange={e => this.setState({ value: e.target.value })}
			        onSelect={value => this.setState({ value })}
			      />


*/











				 		// 	//				 			{
							// 			 				this.state.places.length !== 0 && this.state.places.map((place, idx) => {
							// 			 					return (
							// 							      <ListGroup>
							// 							        <ListGroupItem key={idx} onClick={() => console.log("clicked")}>{place.place}</ListGroupItem>
							// 							      </ListGroup>
							// 			 					)
							// 			 				})
							// }


							/*
			<Container fluid>
			  	<br></br>
				  	<Row>
				  	<Col sm="5">
				  		<Card className="Card" style={{}}>
				  			<CardBody>
				  				<CardTitle>Places</CardTitle>
				  				<Input type="text" name="searchword" value={this.state.searchword} onChange={this.onChange} placeholder="Restaurant"/>
				  				<Button className="Button" onClick={() => console.log(name)}>Search</Button>    									
				  				<Button className="Button" onClick={() => console.log(name)}>Done..Let's move on!</Button>
				  			</CardBody>
				  		</Card>
				  	</Col>
				 		<Col sm="7">
				  	</Col>
				  	</Row>
				</Container>





							*/