import React from "react";
import users from './Users.module.sass';
import userSmallAva from './../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = ( props ) => {
  // debugger
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
                    onClick={ () => { 
                    props.toggleIsFollowing(true, user.id)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                          'API-KEY': '84512d94-69e4-456a-81e9-1ab207d96e38',
                        }
                    }).then(response => {
                        if(response.data.resultCode === 0){
                          props.unFollow(user.id)
                        }
                        props.toggleIsFollowing(false, user.id)
                      })
                   } }>Unfollow</button> 
                  : <button 
                    disabled={ props.followingInProgress.some(id => id === user.id) }
                    className={ users.button } onClick={ () => { 
                    props.toggleIsFollowing(true, user.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                      withCredentials: true,
                      headers: {
                          'API-KEY': '84512d94-69e4-456a-81e9-1ab207d96e38',
                        }
                    }).then(response => {
                        if(response.data.resultCode === 0){
                          props.follow(user.id)
                        }
                        props.toggleIsFollowing(false, user.id)
                      })
                   } }>Follow</button>
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