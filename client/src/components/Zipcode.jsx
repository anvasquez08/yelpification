import React, { Component } from 'react';
import {
	Container, Row, Col,
	Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Button, 
	Form, 
	FormGroup, 
	Input, 
	Label, 
	Badge,
	Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class Zipcode extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			zipcode: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
	  this.setState({[event.target.name]: event.target.value})
	}

	render(){
		return (
  			<Container fluid>
		  			<Row>
		          <Col>
		        		 Some text
		          </Col>
		        </Row>
    		</Container>
		)
	}
}
			// <h1>Zipcode</h1>
export default Zipcode;

			// <div>
  	// 		<Container>
  	// 		<Row>
   //        <Col sm="12" md={{ size: 50, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
   //      </Row>
   //  		</Container>

			// <Card>
			// 	<CardBody>
			// 		<CardTitle>Zip Code</CardTitle>

			// 		<Input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.onChange}/>
			// 		<Button color="danger">Next</Button>
			// 	</CardBody>
			// </Card>

			// 	<Form inline> 
			// 	    <FormGroup>
			// 	    Your City  <Label hidden>Zipcode</Label>
			// 			<Input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.onChange}/>
			// 		</FormGroup>
			// 		<Button color="danger">Next</Button>
			// 	</Form>
			// </div>