import './App.css';
import {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import SearchResult from './component/SearchResult'
import SearchTab from './component/SearchTab';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue:''
    }
  }
  doSearch = (input) => {
    this.setState({inputValue: input})
  }
  render() {
    return(
      <div id="App">
        <BrowserRouter>
        <SearchTab doSearch={this.doSearch}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/searchResult' element={<SearchResult/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
