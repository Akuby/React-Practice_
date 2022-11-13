import './App.css';
import {Component} from 'react';
import MySlider from './components/MySlider'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div id='App'>
        <MySlider />
      </div>
    )
  }
}

export default App;
