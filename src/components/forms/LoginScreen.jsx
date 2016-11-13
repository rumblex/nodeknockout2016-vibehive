import  React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'src/actions/actions'

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.gitLogin = this.gitLogin.bind(this);
    this.fbLogin = this.fbLogin.bind(this);
    this.twLogin = this.twLogin.bind(this);
  }
  onLogout(e) {
    e.preventDefault();
    var {dispatch}  = this.props;
    dispatch(actions.startLogout());
  }
  gitLogin() {
    var {dispatch}  = this.props;
    dispatch(actions.startLogin('github'));
  }
  fbLogin() {
    var {dispatch}  = this.props;
    dispatch(actions.startLogin('facebook'));
  }
  twLogin() {
    var {dispatch}  = this.props;
    dispatch(actions.startLogin('twitter'));
  }
  gLogin() {
    var {dispatch}  = this.props;
    dispatch(actions.startLogin('google'));
  }
  render() {
    return(
      <div className="login-screen small-centered small-12 columns large-centered">
        <p className="login-text"> SIGN UP </p>
        <p className="login-text"> TO CONNECT </p>
        <button className="button facebook-button" onClick={this.fbLogin}>FACEBOOK</button>
        <button className="button twitter-button" onClick={this.twLogin}>TWITTER</button>
        <button className="button github-button" onClick={this.gitLogin}>GITHUB</button>
        <button className="button google-button" onClick={this.gLogin}>GOOGLE</button>
        <button className="button hollow logout-button" onClick={this.onLogout}>LOGOUT</button>
      </div>
    )
  }
}
export default connect()(LoginScreen);
