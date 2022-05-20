import React from "react";
import { connect } from "react-redux";
import { login } from './../../redux/authReduser';

class LoginForm extends React.Component {
  state = {
    email: null,
    password: null,
    rememberMe: false
  };

  onChengeText = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  };

  onCheck = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.checked
    })
  }

  render(){
    return(
      <>
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email">Login</label>
            <input type="text" name="email" onChange={ this.onChengeText }/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={ this.onChengeText }/>
          </div>
          <div>
            <input type="checkbox" name="rememberMe" onChange={ this.onCheck }/>
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button onClick={ () => this.props.onSubmit(this.state) }>Submit</button>
        </form>
      </>
    )
  }
}

const Login = (props) => {
  const onSubmit = (data) => {
    const {email, password, rememberMe} = data;
    props.login(email, password, rememberMe);
  };

  return(
    <LoginForm onSubmit={ onSubmit }/>
  )
};

const LoginContainer = connect(null, { login })(Login);

export default LoginContainer;