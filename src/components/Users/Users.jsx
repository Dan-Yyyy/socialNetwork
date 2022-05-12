import React from "react";
import users from './Users.module.sass';

const Users = ( props ) => {
  // debugger
  return(
    <div>
      <h3 className={ users.title }>Users</h3>
      {
        props.state.map(user => 
          <div className={ users.users } key={ user.id }>
            <div className={ users.users__item }>
              <div className={ users.image }>
                <img src={ user.imgUrl } alt="" />
                { 
                  user.followStatus 
                  ? <button className={ users.button } onClick={ () => { props.unFollow(user.id) } }>Unfollow</button> 
                  : <button className={ users.button } onClick={ () => { props.follow(user.id) } }>Follow</button>
                } 
              </div>
              <div className={ users.content }>
                <div className={ users.content__block }>
                  <div className={ users.name }> { user.fullName } </div>
                  <div className={ users.status }> { user.status } </div>
                </div>
                <div className={ users.content__block }>
                  <div className={ users.location }> { user.location.country }, { user.location.city } </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
     
    </div>
  )
}

export default Users;