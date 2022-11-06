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
    const result = this.props.slicedList.map(
      (data) => (
      <Post key={data.id} id={data.id} title={data.title} writer={data.writer} date={data.date} fileExist={data.fileExist} hits={data.hits} />
      )
    )

    return(
      <div>
      <div id='header'>
        <span className='id'>번호</span>
        <span className='title'>제목</span>
        <span className='writer'>작성자</span>
        <span className='date'>날짜</span>
        <span className='fileExist'>파일첨부</span>
        <span className='hits'>조회수</span>
      </div>
      <div id='post-list'>
        {result}
      </div>
      </div>
    )
  }
}

export default PostList;
