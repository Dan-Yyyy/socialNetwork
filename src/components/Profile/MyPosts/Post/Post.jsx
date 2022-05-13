import React from 'react';
import post from './Post.module.sass';
import user from './../../../../assets/images/user.png';

const Post = (props) => {
  return (
    <div className={ post.post } >
      <img src={ user } alt='userImage' />
      <div className={ post.post__item }>
        <div className={ post.post__message } > 
          { props.message } 
        </div> 
        <div className={ post.post__likes }> likes - { props.likesCount } </div>
      </div>
    </div>
  )
};

export default Post;