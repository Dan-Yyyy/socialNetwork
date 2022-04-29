import profile from './Profile.module.sass';
import imageContent from './../../image.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className=''>
          <div className={ profile.image }>
            <img src={imageContent} alt="content" />
          </div>
          <div className="user">
            <img src="" alt="" />
            <div className="user__description">

            </div>
          </div>
          <MyPosts />
        </div>
    )
};

export default Profile;