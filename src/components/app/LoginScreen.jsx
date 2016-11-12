import  React, {Component} from 'react'
import {connect} from 'react-redux'

export class LoginScreen extends Component {
  render() {
    return(
      <div className="login-screen">
        <p className="login-text"> SIGN UP </p>
        <p className="login-text"> TO CONNECT </p>
        <button className="button sign-up-button">SIGN UP</button>
      </div>
    )
  }
}
export default connect()(LoginScreen);
