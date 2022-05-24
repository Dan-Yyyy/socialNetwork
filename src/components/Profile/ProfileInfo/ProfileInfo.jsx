import React from 'react';
import profileInfo from './ProfileInfo.module.sass';
import imageContent from './../../../assets/images/image.jpg';
import userImageDefault from './../../../assets/images/user.png';
import Preloading from '../../common/Preloading/Preloading';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile) 
    return <Preloading />

  return(
    <div>
      <div className={ profileInfo.image }>
        <img src={ imageContent } alt="content" />
      </div>
      <div className={ profileInfo.user }>
        <div className={ profileInfo.user__image }>
          <img src={ profile.photos.large ? profile.photos.large : userImageDefault } alt="userAva" />
        </div>
        <div className={ profileInfo.user_description }>
          <div className={ profileInfo.user__name }> { profile.fullName } </div>
          { profile.aboutMe 
          ? <div className={ profileInfo.user__about }>
              <span> About me: </span> { profile.aboutMe }
            </div>
          : null }
          <ProfileStatus status={status} updateStatus={ updateStatus }/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;