import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Switch, History} from "react-router-dom";

import Welcome from './components/Welcome.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Favorites from './components/Favorites.jsx';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {
	constructor(props){
		super(props);
		this.makeMuiTheme = this.makeMuiTheme.bind(this);
	}

	makeMuiTheme() {
    return getMuiTheme({
      palette: {
        borderColor: cyan500
      },
    })
  }

	render(){
		return (
			<div>
			<Login />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
		  //  <MuiThemeProvider muiTheme={this.makeMuiTheme()}>
				// <Router>
				// 	<Switch>
				// 		<Welcome exact path="/" component={Welcome}/>			
				// 		<Search exact path="/search" component={Search}/>
			 //    		<Login exact path="/login" component={Login}/>
				// 		<Signup path="/signup" component={Signup}/>
			 //   		<Favorites exact path="/favorites" component={Favorites}/>
				// 	</Switch>
				// </Router>
	   //   </MuiThemeProvider>