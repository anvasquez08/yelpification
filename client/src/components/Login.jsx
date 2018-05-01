import React from 'react';
import { Button, Form, FormGroup, Input, Label, Badge} from 'reactstrap';
class Login extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this);
		this.createSession = this.createSession.bind(this);
	}

	onChange(event) {
	  this.setState({[event.target.name]: event.target.value})
	}

	createSession() {

	}

	render(){
		return (
			<div className="row" className="center-block" >
			<h1>Login <Badge color="secondary">New</Badge></h1>
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
			</div>
		)
	}
}

export default Login;