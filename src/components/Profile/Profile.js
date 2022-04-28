import profile from './Profile.module.sass';
import imageContent from './../../image.jpg';

const Profile = () => {
    return(
        <div className={profile.container}>
          <div className="image">
            <img src={imageContent} alt="content" />
          </div>
          <div className="user">
            <img src="" alt="" />
            <div className="user__description">

            </div>
          </div>
          <div className="posts">
            <span className="posts__title">My posts</span>
            <form action="">
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <input type="submit" />
            </form>
          </div>
        </div>
    )
};

export default Profile;