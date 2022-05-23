import React from "react";
import users from './Users.module.sass';
import userSmallAva from './../../assets/images/user.png';
import { NavLink } from "react-router-dom";
 
const Users = ( props ) => {
  let pageCount = Math.ceil( props.totalUsersCount / props.pageSize);
  let allPages = [];
  for(let i = 1; i <= pageCount; i++ ) {
    allPages.push(i);
  }

  const fixCountPage = 15;

  return( 
    <div>  
      <h3 className={ users.title }>Users</h3>
      <div className={ users.pagination}>
        {
          allPages?.map((page, index) => {
            if(index < fixCountPage) return (
              <span 
                key={ page } 
                className={ props.currentPage === page ? users.page_active : null }
                onClick={() => props.onChangePage(page)}
              >
                { page }
              </span>
            ); else return null
          })
        }
      </div>

      {
        props.users.map(user => 
          <div className={ users.users } key={ user.id }>
            <div className={ users.users__item }>
              <div className={ users.image }>
                <NavLink to={'/profile/' + user.id}>
                  <img src={ user.photos.small != null ? user.photos.small : userSmallAva } alt="userAvatar" />
                </NavLink>
                { 
                  user.followed 
                  ? <button 
                    disabled={ props.followingInProgress.some(id => id === user.id) }
                    className={ users.button } 
                    onClick={ () => { props.unFollow(user.id) } }>Unfollow</button> 
                  : <button 
                    disabled={ props.followingInProgress.some(id => id === user.id) }
                    className={ users.button } 
                    onClick={ () => { props.follow(user.id) } }>Follow</button>
                } 
              </div>
              <div className={ users.content }>
                <div className={ users.name }> { user.name } </div>
                <div className={ users.status }> { user.status != null ? user.status : 'Has not status' }  </div>
              </div>
            </div>
          </div>
        )
      } 
    </div>
  )
}

export default Users;