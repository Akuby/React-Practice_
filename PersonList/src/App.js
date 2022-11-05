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

  delPerson=(name)=>{
    //filter
    const filteredList=this.state.personnelList.filter(
      (data)=>(data.name !== name)
    )
    // //PersonList배열에 있는 id랑 함수 매개변수로 넘어온 아이디랑 일치하지 않는
    // //배열 원소만 리턴해서, 새로운 배열 생성
    this.setState({
      personnelList:filteredList
    })
    //setState -> render
  }


  render() {

    const list = this.state.personnelList.map(
      (data, idx) => (
        <PersonnelList 
        key={idx+1}
        name = {data.name}
        gender = {data.gender}
        height = {data.height}
        delPerson={this.delPerson}
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