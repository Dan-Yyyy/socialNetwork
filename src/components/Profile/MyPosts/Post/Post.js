import post from './Post.module.sass';
import user from './../../../../user.png';

const Post = (props) => {
  return (
    <div className={ post.post } >
      <img src={ user } alt='userImage' />
      <div className='' > 
        { props.message } 
      </div> 
    </div>
  )
};

export default Post;