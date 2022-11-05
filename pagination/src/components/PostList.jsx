import {Component} from 'react';
import Post from './Post';
import '../css/PostList.css';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    const result = this.props.postList.map(
      (data) => (<Post key={data.id} id={data.id} title={data.title}/>)
    )

    return(
      <div id='post-list'>
        {result}
      </div>
    )
  }
}

export default PostList;
