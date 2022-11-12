import './App.css';
import {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Profile from './component/Profile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div id="App">
        <BrowserRouter>
        <div id='header'>
          <h1>welcome!</h1>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
