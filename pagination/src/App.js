import {Component} from 'react';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [
        {id:10, title:'title-10'},
        {id:9, title:'title-9'},
        {id:8, title:'title-8'},
        {id:7, title:'title-7'},
        {id:6, title:'title-6'},
        {id:5, title:'title-5'},
        {id:4, title:'title-4'},
        {id:3, title:'title-3'},
        {id:2, title:'title-2'},
        {id:1, title:'title-1'},
      ],
      postPerPage: 3,
      currentPage: 1
    }
  }

  setCurrentPage = (page) => { // pagination 컴포넌트한테 얻어온 값으로 state 값을 변경
    this.setState({
      currentPage:page
    })
  }

  currentPostList= (totalPostList) => { // 현재 페이지에 노출할 포스트 개수를 정해 state 값을 변경
    const {currentPage, postPerPage} = this.state
    const startIdx = (currentPage-1) * postPerPage
    const endIdx = startIdx + postPerPage
    const slicedList = totalPostList.slice(startIdx,endIdx)
    return slicedList;
  }

  render() {
    return(
      <div id='App'>
        <PostList postList={this.currentPostList(this.state.postList)}/>
        <Pagination total={this.state.postList.length} postPerPage={this.state.postPerPage}
        setCurrentPage={this.setCurrentPage}/> {/*Pagination 컴포넌트로 함수 넘기기*/}
      </div>
    )
  }
}

export default App;
