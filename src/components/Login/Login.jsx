import React from "react";
import { connect } from "react-redux";
import { login } from './../../redux/authReduser';
import LoginForm from './LoginForm';

const Login = ({login}) => {
  const onSubmit = (data) => {
    const {email, password, rememberMe} = data;
    login(email, password, rememberMe);
  }; 

  return(
    <LoginForm onSubmit={ onSubmit }/>
  )
};

const LoginContainer = connect(null, { login })(Login);

export default LoginContainer;