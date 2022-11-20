import '../css/Post.css'
function Post(props) {
  return (
    <div className="Post">
      <span>{props.no}</span>
      <span>{props.title}</span>
    </div>
  );
}

export default Post;
