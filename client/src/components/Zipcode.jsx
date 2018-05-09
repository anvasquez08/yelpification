import React, { Component } from 'react';
import {
	Container, Row, Col,
	Card, CardBody,
  CardTitle, 
  Button, 
	Input
} from 'reactstrap';

class Zipcode extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			zipcode: '', 
			cardColor: '#A292A1'
		}
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	onChange(event) {
	  this.setState({[event.target.name]: event.target.value})
	}

	handleClick() {
		this.setState({
			cardColor:  '#D8B6AF'
		})
	}

	render() {
		return (
  			<Container fluid>
  			 <br></br>
  			  <Row>
      		<Col sm="5">
						<Card className="Card" style={{backgroundColor: this.state.cardColor}}>
							<CardBody>
								<CardTitle>Zip Code</CardTitle>
								<Input type="text" name="zipcode" value={this.state.zipcode} placeholder="City" onChange={this.onChange}/>
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
