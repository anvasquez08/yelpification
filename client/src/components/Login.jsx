import React from 'react';

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
			<div>
				<form> 
					Username
					<input type="text" name="username" value={this.state.username} onChange={this.onChange}/>
					Password
					<input type="text" name="username" value={this.state.password} onChange={this.onChange}/>
					<button>Login</button>
					<br></br>
					Not a member? 
					<button>Sign-Up</button>
				</form>
			</div>
		)
	}
}

export default Login;