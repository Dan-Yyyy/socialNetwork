import MyPosts from './MyPosts/MyPosts';
import profile from './Profile.module.sass';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state}) => {
    return(
      <div className=''>
        <ProfileInfo />
        <MyPosts postData={ state.postData }/>
      </div>
    )
};

export default Profile;