import React from "react";
import users from './Users.module.sass';
import User from './User/User';
import Pagination from "../common/Pagination/Pagination";
 
const Users = ( props ) => {
 
  return( 
    <div>  
      <h3 className={ users.title }>Users</h3>

      <Pagination totalUsersCount={props.totalUsersCount} 
        pageSize={props.pageSize} 
        currentPage={props.currentPage} 
        onChangePage={props.onChangePage}/>

      {
        props.users.map(user => 
         <User key={ user.id }
            user={ user } 
            followingInProgress={ props.followingInProgress } 
            unFollow={props.unFollow} 
            follow={props.follow}/>
        )
      } 
    </div>
  )
}

export default Users;