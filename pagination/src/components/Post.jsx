import '../css/Post.css';

function Post(props) { // props 꼭 받아와야 한다...!
  return(
    <div className='post'>
      <span>{props.id}</span>
      <span>{props.title}</span>
    </div>
  )
}

export default Post;
