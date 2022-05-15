import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import * as axios from 'axios';
// import profile from './Profile.module.sass';

class ProfileContainer extends React.Component {

  componentDidMount() {
    const userId = this.props.params.id;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    })
  }

  render() {
    return(
      <Profile { ...this.props } profilePage={ this.props.profile }/>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);