import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import profile from './Profile.module.sass';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <div className=''>
      <ProfileInfo profile={ props.profile } status={ props.status } updateStatus={ props.updateStatus }/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile; 