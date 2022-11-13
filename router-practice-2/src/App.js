import './App.css';
import {Component} from 'react';
import Home from './components/Home'
import AAA from './components/AAA'
import BBB from './components/BBB'
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div id='App'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/AAA/*' element={<AAA />} />
            <Route path='/BBB/*' element={<BBB />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
