import React from 'react';
import profileInfo from './ProfileInfo.module.sass';
import imageContent from './../../../image.jpg';
import userImageDefault from './../../../assets/images/user.png';
import Preloading from '../../Preloading/Preloading';

const ProfileInfo = (props) => {

  if(!props.profile) 
    return <Preloading />

  return(
    <div>
      <div className={ profileInfo.image }>
        <img src={ imageContent } alt="content" />
      </div>
      <div className={ profileInfo.user }>
        <div className={ profileInfo.user__image }>
          <img src={ props.profile.photos.large ? props.profile.photos.large : userImageDefault } alt="userAva" />
        </div>
        <div className={ profileInfo.user_description }>
          <div className={ profileInfo.user__name }> { props.profile.fullName } </div>
          { props.profile.aboutMe 
          ? <div className={ profileInfo.user__about }>
            <span> About me: </span> { props.profile.aboutMe }
          </div>
          : null }
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;