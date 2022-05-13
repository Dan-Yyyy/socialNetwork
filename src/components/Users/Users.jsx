import React from "react";
import users from './Users.module.sass';
import * as axios from 'axios';
import userSmallAva from './../../user.png';

const Users = ( props ) => {

  if(props.state.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  return(
    <div>
      <h3 className={ users.title }>Users</h3>
      {
        props.state.map(user => 
          <div className={ users.users } key={ user.id }>
            <div className={ users.users__item }>
              <div className={ users.image }>
                <img src={ user.photos.small != null ? user.photos.small : userSmallAva } alt="userAvatar" />
                { 
                  user.followed 
                  ? <button className={ users.button } onClick={ () => { props.unFollow(user.id) } }>Unfollow</button> 
                  : <button className={ users.button } onClick={ () => { props.follow(user.id) } }>Follow</button>
                } 
              </div>
              <div className={ users.content }>
                <div className={ users.name }> { user.name } </div>
                <div className={ users.status }> { user.status != null ? users.status : 'Has not status' } </div>
              </div>
            </div>
          </div>
        )
      }
     
    </div>
  )
}

export default Users;