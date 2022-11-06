import {Component} from 'react';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [
        {id:18, title:'dumce conmlit!', writer: 'super123', date:'2022-02-20', fileExist: false, hits: 18},
        {id:17, title:'Duis metus nisi, vestibulum', writer: 'dfbnv2d', date:'2022-02-20', fileExist: false, hits: 20},
        {id:16, title:'dapibus vehicula mauris', writer: 'liirnfy', date:'2022-02-20', fileExist: true, hits: 30},
        {id:15, title:'Nunc sollicitudin sem ac mi', writer: 'dfnv_23', date:'2022-02-20', fileExist: false, hits: 21},
        {id:14, title:'tristique hendrerit', writer: 'anvie12', date:'2022-02-20', fileExist: true, hits: 15},
        {id:13, title:'Suspendisse mollis', writer: 'vansdi-123', date:'2022-02-20', fileExist: false, hits: 123},
        {id:12, title:'libero quis justo sagittis', writer: 'asdv89', date:'2022-02-20', fileExist: false, hits: 34},
        {id:11, title:'Sed ac urna est. Sed sed aliquam libero.', writer: 'mlrece77', date:'2022-02-20', fileExist: true, hits: 120},
        {id:10, title:'lorem ipsum...', writer: 'wncvd3', date:'2022-02-20', fileExist: true, hits: 10},
        {id:9, title:'amet dit salar', writer: 'vcije21', date:'2022-02-20', fileExist: false, hits: 12},
        {id:8, title:'dumce conmlit!', writer: 'super123', date:'2022-02-20', fileExist: false, hits: 18},
        {id:7, title:'Duis metus nisi, vestibulum', writer: 'dfbnv2d', date:'2022-02-20', fileExist: false, hits: 20},
        {id:6, title:'dapibus vehicula mauris', writer: 'liirnfy', date:'2022-02-20', fileExist: true, hits: 30},
        {id:5, title:'Nunc sollicitudin sem ac mi', writer: 'dfnv_23', date:'2022-02-20', fileExist: false, hits: 21},
        {id:4, title:'tristique hendrerit', writer: 'anvie12', date:'2022-02-20', fileExist: true, hits: 15},
        {id:3, title:'Suspendisse mollis', writer: 'vansdi-123', date:'2022-02-20', fileExist: false, hits: 123},
        {id:2, title:'libero quis justo sagittis', writer: 'asdv89', date:'2022-02-20', fileExist: false, hits: 34},
        {id:1, title:'Sed ac urna est. Sed sed aliquam libero.', writer: 'mlrece77', date:'2022-02-20', fileExist: true, hits: 120},
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
    const {currentPage, postPerPage} = this.state // this.state 객체 내에 저장된 데이터를 구조 떼고 데이터만 가져올 수 있다.
    const startIdx = (currentPage-1) * postPerPage
    const endIdx = startIdx + postPerPage
    const slicedList = totalPostList.slice(startIdx,endIdx)
    return slicedList;
  }
  
  render() {
    const {postList, postPerPage, currentPage} = this.state;
    
    
    return(
      <div id='App'>
        <PostList slicedList={this.currentPostList(postList)}/>
        <Pagination total={postList.length} postPerPage={postPerPage} currentPage={currentPage}
        setCurrentPage={this.setCurrentPage}/> {/*Pagination 컴포넌트로 함수 넘기기*/}
      </div>
    )
  }
}

export default App;
