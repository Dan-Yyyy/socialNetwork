import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { userProfile, updateStatus, getStatus } from './../../redux/profileReducer';
import { useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.id;
    if(!userId) 
      {
        userId = this.props.authorizedUserId;
      }
    this.props.userProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return(
      <Profile 
        { ...this.props } 
        profilePage={ this.props.profile } 
        status={ this.props.status }
        updateStatus={ this.props.updateStatus }/>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    auth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
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

export default connect(mapStateToProps, { userProfile, updateStatus, getStatus })(ProfileContainerWithRouter); 