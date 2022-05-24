import React from "react";
import loginStyle from './Login.module.sass';

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
        <h1 className={ loginStyle.title }>Login</h1>
        <form onSubmit={(e) => e.preventDefault()} className={ loginStyle.form }>
          <div className={ loginStyle.container }>
            <input type="email" name="email" 
              onChange={ this.onChengeText } 
              className={ loginStyle.input_text } 
              placeholder="Login"/>
          </div>
          <div className={ loginStyle.container }>
            <input type="password" name="password" 
              onChange={ this.onChengeText } 
              className={ loginStyle.input_text }
              placeholder="Password"/>
          </div>
          <div className={ loginStyle.container + ' ' + loginStyle.container_checkbox }>
            <input type="checkbox" name="rememberMe" onChange={ this.onCheck } className={ loginStyle.input_checkbox }/>
            <label htmlFor="rememberMe" className={ loginStyle.lable_checkbox }>Remember me</label>
          </div>
          <button onClick={ () => this.props.onSubmit(this.state) } className={ loginStyle.button }>Submit</button>
        </form>
      </>
    )
  }
};

export default LoginForm;