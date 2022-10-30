import './App.css'
import {Component} from 'react';
import PersonnelList from './components/Personnel';
import InputComp from './components/InputComp';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnelList: [
        {name: '이민호', gender: '남', height: 180.2},
        {name: '김사랑', gender: '여', height: 168.8},
        {name: '서현진', gender: '여', height: 165.7},
      ]
    }
  }

  addPerson = (input) => {
    const concatList = this.state.personnelList.concat(input)
    this.setState({
      personnelList: concatList
    })
  }

  render() {

    const list = this.state.personnelList.map(
      (data, idx) => (
        <PersonnelList 
        key={idx+1}
        name = {data.name}
        gender = {data.gender}
        height = {data.height}
        />
      )
    )


    return(
      <div id='App'>
        <InputComp addPerson={this.addPerson}/>
        {list}
      </div>
    )
  }
}

export default App;