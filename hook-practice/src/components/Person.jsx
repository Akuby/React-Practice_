import { useState } from 'react';
import '../css/Person.css'
function Person(props) {
  const [isEditMode, setisEditMode] = useState(false);
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [height, setHeight] = useState(props.height);

  const updateStates = () => {
    setName(props.name)
    setAge(props.age)
    setHeight(props.height)
  }

  const toEditMode = () => {
    updateStates()
    if (isEditMode === true) {
      props.updatePerson(props.id, name, age, height)
    }
    setisEditMode(!isEditMode)
  }
  const cancelEdit = () => {
    setisEditMode(!isEditMode)
    updateStates()
  }

  if (isEditMode === false) {
    return(
      <div id='person'>
      <div>
        이름 : {props.name}<br />
        키 : {props.height}<br />
        나이 : {props.age}
      </div>
      <div>
      <button onClick={() => toEditMode()}>수정</button>
      <button onClick={() => props.delPerson(props.id)}>삭제</button>
      </div>
      </div>
    )
  } else if (isEditMode === true) {
    return(
      <div id='person'>
      <div>
        이름 : <input type="text" defaultValue={name} onChange={e => setName(e.target.value)} /><br />
        키 : <input type="text" defaultValue={height} onChange={e => setHeight(e.target.value)}/><br />
        나이 : <input type="text" defaultValue={age} onChange={e => setAge(e.target.value)} />
      </div>
      <div>
      <button onClick={() => toEditMode()}>수정완료</button>
      <button onClick={() => props.delPerson(props.id)}>삭제</button>
      <button onClick={() => cancelEdit()}>취소</button>
      </div>
      </div>
    )
  }
}
export default Person;