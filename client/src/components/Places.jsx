import React from 'react';

class Places extends React.Component{


render(){
	return (
				<div className="row" className="center-block" >
			<h1>Zipcode <Badge color="secondary"></Badge></h1>
				<Form inline> 
				    <FormGroup>
								Your Username
								<Label for="exampleEmail" hidden>Email</Label>
								<Input type="text" name="username" value={this.state.username} placeholder="Email" onChange={this.onChange}/>
						</FormGroup>
					Password
					<Input type="text" name="username" value={this.state.password} placeholder="Password" onChange={this.onChange}/>
					<button>Login</button>
					<br></br>
					Not a member? 
					<Button color="danger">Sign-Up</Button>
				</Form>
			</div>)
}
}

export default Places;