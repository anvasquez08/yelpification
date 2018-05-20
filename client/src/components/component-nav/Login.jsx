import React from 'react';
import axios from 'axios';
import history from '../History.jsx';
import {withRouter} from 'react-router-dom';

import Modal from 'react-modal';
Modal.setAppElement(document.getElementById('app'));

class Login extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      username: '', 
      password: ''
    }
    this.toggleModel = this.toggleModel.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkDatabase = this.checkDatabase.bind(this);
  }

  componentDidMount() {
    this.setState({showModal: true})
  }

  handleInputChange(e) {
    const name = e.target.name 
    this.setState({[name]: e.target.value})
  }

  toggleModel(e) {
    const {showModal} = this.state
    this.setState({showModal: !showModal})
  }

  checkDatabase(e) {
    e.preventDefault()
    const body = {username: this.state.username, password: this.state.password}
    axios.post('/login', body)
    .then(response => {
      console.log(response.data)
      if(response.data) {
        history.push({pathname: '/bookmarks'})     
      } else {
        history.push({pathname: '/'})
      }   

    })
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div>
          <Modal 
              isOpen={this.state.showModal}
              // contentLabel="Signup"
              // portalClassName="ReactModalPortal"
              // overlayClassName="ReactModal__Overlay"
              // className="ReactModal__Content"
              ariaHideApp={true}
              shouldFocusAfterRender={true}
              shouldReturnFocusAfterClose={true}
              onRequestClose={() => this.toggleModel()}
            >
            <div>
               <h2>Login</h2>   
               <form>
                <label>
                  <input  type="text" 
                          name="username" 
                          value={this.state.username} 
                          onChange={this.handleInputChange} 
                          placeholder="username"
                  />  
                  <input  type="password"  
                          name="password"   
                          value={this.state.password} 
                          onChange={this.handleInputChange} 
                          placeholder="password"
                  />              
                </label>
               </form>  
            </div>
            <button onClick={this.checkDatabase}>Login</button>
            <button onClick={() => history.push({pathname: '/signup'})}>Not a member? Sign up</button>
          </Modal>

        </div>
      
    );
  }
}


export default withRouter(Login);