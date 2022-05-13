import React from "react";
import users from './Users.module.sass';
import * as axios from 'axios';
import userSmallAva from './../../user.png';

class UsersClass extends React.Component {

  constructor(props) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  
  render() {
    return(
      <div>
        <h3 className={ users.title }>Users</h3>
        {
          this.props.state.map(user => 
            <div className={ users.users } key={ user.id }>
              <div className={ users.users__item }>
                <div className={ users.image }>
                  <img src={ user.photos.small != null ? user.photos.small : userSmallAva } alt="userAvatar" />
                  { 
                    user.fololowed 
                    ? <button className={ users.button } onClick={ () => { this.props.unFollow(user.id) } }>Unfollow</button> 
                    : <button className={ users.button } onClick={ () => { this.props.follow(user.id) } }>Follow</button>
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
}

export default UsersClass;