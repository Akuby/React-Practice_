import '../css/Post.css';
// import { faFile } from "@fortawesome/free-solid-svg-icons";

function Post(props) { // props 꼭 받아와야 한다...!

  return(
    <div className='post'>
      <span className='id'>{props.id}</span>
      <span className='title'>{props.title}</span>
      <span className='writer'>{props.writer}</span>
      <span className='date'>{props.date}</span>
      <span className='fileExist'>{props.fileExist}</span>
      <span className='hits'>{props.hits}</span>
    </div>
  )
}

export default Post;
