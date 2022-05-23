import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authLogin, logout } from './../../redux/authReduser';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authLogin();
  }

  render() {
    console.log(this.props)
    return (
      <Header { ...this.props }/>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    smollPhoto: state?.profilePage?.profile?.photos?.small || ""
  }
}

export default connect(mapStateToProps, { authLogin, logout })(HeaderContainer);