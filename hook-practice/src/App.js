import './App.css'
import {useState} from 'react';
import Person from './components/Person'
import InputComp from './components/InputComp';
function App() {
  const [personList, setPersonList] = useState([
    {id: 1668847119859, name: '이민호', age: 20, height:182.2},
    {id: 1668847142188, name: '김민지', age: 21, height:161.2},
    {id: 1668847147805, name: '서성훈', age: 22, height:174.3}
  ])


  const AddPerson = (name, age, height) => {
    const newId = new Date().getTime();
    const personObj = {id: newId, name: name, age: age, height: height}
    setPersonList(personList.concat(personObj))
  }


  const delPerson = (targetId) => {
    setPersonList(personList.filter(
      (data) => (data.id !== targetId)
    ))
  }
  

  const updatePerson = (id, name, age, height) => {
    setPersonList(personList.filter(
      (data) => (data.id === id) ? (data.name=name, data.age=age, data.height=height) : data
    ))
  }


  const result = personList.map(
    (data, idx)=> (<Person key={idx} id={data.id} name={data.name} age={data.age} height={data.height} delPerson={delPerson} updatePerson={updatePerson} />)
  )

  return (
    <div id='App'>
      <InputComp AddPerson={AddPerson}/>
      {result}
    </div>
  );
}

export default App;