import React from 'react';
import post from './Post.module.sass';
import user from './../../../../assets/images/user.png';
import { BiLike } from 'react-icons/bi';

const Post = ({message, likesCount, idPost, click}) => {
  return (
    <div className={ post.post } >
      <img src={ user } alt='userImage' />
      <div className={ post.post__item }>
        <div className={ post.post__message } > 
          { message } 
        </div> 
        <div className={ post.post__likes }> 
          <span>likes - { likesCount } </span>
          <span className={ post.like_button } onClick={ () => click(idPost) }><BiLike size={ 16 }/></span></div>
      </div>
    </div>
  )
};

export default Post;