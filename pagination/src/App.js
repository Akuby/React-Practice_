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
      postPerPage:3
    }
  }

  render() {
    return(
      <div id='App'>
        <PostList postList={this.state.postList}/>
        <Pagination total={this.state.postList.length} postPerPage={this.state.postPerPage}/>
      </div>
    )
  }
}

export default App;
