import React from 'react';
import axios from 'axios';
import history from '../History.jsx';
import {withRouter} from 'react-router-dom';


import Modal from 'react-modal';
Modal.setAppElement(document.getElementById('app'));

class Signup extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      username: '', 
      password: ''
    }
    this.toggleModel = this.toggleModel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkDB = this.checkDB.bind(this);
  }

  componentDidMount() {
    this.setState({showModal: true})
  }

  toggleModel(e) {
    const {showModal} = this.state
    this.setState({showModal: !showModal}, () => history.push({pathname: '/'}))
  }

  handleChange(e) {
    const {name} = e.target.name 
    this.setState({[name]: e.target.value})
  }

  checkDB(e) {
    e.preventDefault()
    console.log('clicked')
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
              onRequestClose={() => history.push({pathname: '/bookmarks'})}

            >
            <div>
               <h2>Signup</h2>   
               <form>
                <label>
                  <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>                
                </label>
               </form>  
            </div>

            <button onClick={this.toggleModel}>Signup</button>
            <button >Not a member? Sign up</button>
          </Modal>

        </div>
      
    );
  }
}


export default withRouter(Signup);