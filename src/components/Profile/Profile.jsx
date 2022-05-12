import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import profile from './Profile.module.sass';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return(
    <div className=''>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  )
};

export default Profile; 