import MyPostsContainer from './MyPosts/MyPostsContainer';
// import profile from './Profile.module.sass';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <div className=''>
      <ProfileInfo />
      <MyPostsContainer store={ props.store }/>
    </div>
  )
};

export default Profile; 