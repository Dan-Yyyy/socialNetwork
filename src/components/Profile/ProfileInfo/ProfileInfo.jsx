import React from 'react';
import profileInfo from './ProfileInfo.module.sass';
import imageContent from './../../../image.jpg';

const ProfileInfo = () => {
  return(
    <div>
      <div className={ profileInfo.image }>
        <img src={imageContent} alt="content" />
      </div>
      <div className="user">
        <img src="" alt="" />
        <div className="user__description">
          user
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;