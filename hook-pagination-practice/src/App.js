import './App.css';
import PostList from './components/PostList'
import Pagination from './components/Pagination'
import {useState} from 'react';

function App() {
  const [postList, setPostList] = useState([
    {no: 10, title: 'title-1'},
    {no: 9, title: 'title-9'},
    {no: 8, title: 'title-8'},
    {no: 7, title: 'title-7'},
    {no: 6, title: 'title-6'},
    {no: 5, title: 'title-5'},
    {no: 4, title: 'title-4'},
    {no: 3, title: 'title-3'},
    {no: 2, title: 'title-2'},
    {no: 1, title: 'title-1'}
  ])
  const postPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1)
  
  const currentPostList= (postList) => {
    const startIdx = (currentPage-1) * postPerPage
    const endIdx = startIdx + postPerPage
    const slicedList = postList.slice(startIdx,endIdx)
    return slicedList;
  }
  return (
    <div className="App">
      <PostList postList={currentPostList(postList)} postPerPage={postPerPage} currentPage={currentPage}/>
      <Pagination total={postList.length} postPerPage={postPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
