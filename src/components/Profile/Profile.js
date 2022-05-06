import MyPosts from './MyPosts/MyPosts';
// import profile from './Profile.module.sass';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <div className=''>
      <ProfileInfo />
      <MyPosts data={ props.state } dispatch={ props.dispatch }/>
    </div>
  )
};

export default Profile; 