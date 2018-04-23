import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		zipcode: ''
  	}
  	this.handleStateZipcode = this.handleStateZipcode.bind(this)
  }

  handleStateZipcode(e){
  	this.setState({
  		zipcode: e.target.value
  	})
  }

  render(){
  	return (
  		<div>
  			<h1>Add a new Place</h1>
  			<button>Search</button>
  	 		<input type="text" 
  	 			   value={this.state.zipcode}
  	 			   onChange={this.handleStateZipcode }/>
  		</div>
  	)
  }
}

export default Welcome;