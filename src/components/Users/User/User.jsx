import React from "react";
import style from './User.module.sass';
import userSmallAva from './../../../assets/images/user.png';
import { NavLink } from "react-router-dom";
 
const User = ( {user, followingInProgress, unFollow, follow} ) => {

  return( 
    <div className={ style.users }>
      <div className={ style.users__item }>
        <div className={ style.image }>
          <NavLink to={'/profile/' + user.id}>
            <img src={ user.photos.small != null ? user.photos.small : userSmallAva } alt="userAvatar" />
          </NavLink>
          { 
            user.followed 
            ? <button 
              disabled={ followingInProgress.some(id => id === user.id) }
              className={ style.button } 
              onClick={ () => { unFollow(user.id) } }>Unfollow</button> 
            : <button 
              disabled={ followingInProgress.some(id => id === user.id) }
              className={ style.button } 
              onClick={ () => { follow(user.id) } }>Follow</button>
          } 
        </div>
        <div className={ style.content }>
          <div className={ style.name }> { user.name } </div>
          <div className={ style.status }> { user.status != null ? user.status : 'Has not status' }  </div>
        </div>
      </div>
    </div>
  )
}

export default User;