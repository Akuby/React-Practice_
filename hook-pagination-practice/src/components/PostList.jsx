import '../css/PostList.css'
import Post from './Post';
function PostList(props) {

  const {postList,} = props
  
  const result = postList.map(
    (data, idx) => (<Post key={idx} no={data.no} title={data.title}/>)
  )
  return (
    <div className="PostList">
      {result}
    </div>
  );
}

export default PostList;
