import React, { Component } from 'react';
import {
	Container, Row, Col,
	Card, CardBody,
  CardTitle, 
  Button, 
	Input
} from 'reactstrap';


class Places extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			placed: [], 
			searchword: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	render() {
		return (
				<Container fluid>
			  	<br></br>
				  	<Row>
				  	<Col sm="5">
				  		<Card className="Card" style={{}}>
				  			<CardBody>
				  				<CardTitle>Places to Not Eat</CardTitle>
				  				<Input type="text" name="searchword" value={this.state.searchword} onChange={this.onChange} placeholder="Restaurant"/>
				  				<Button className="Button" onClick={() => console.log(name)}>Search</Button>    									
				  				<Button className="Button" onClick={() => console.log(name)}>Done..Let's move on!</Button>
				  			</CardBody>
				  		</Card>
				  	</Col>
				  	</Row>
				</Container>
		)
	}
}

export default Places;