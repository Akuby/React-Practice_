import '../css/InputComp.css'
import {useState} from 'react';
function InputComp(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')

  const beforeSend = () => {
    if (name.trim() === '') {
      alert('유효한 이름을 입력하세요')
    } else if ( age > 120 || age < 0 ){
      alert('유효한 나이를 입력하세요') 
    } else if (height > 220 || height <= 0) {
      alert('유효한 키를 입력하세요')
    }
    else {
      props.AddPerson(name.trim(), parseInt(age), parseFloat(height))
    }
  }
  
  return(
    <div id='InputComp'>
      <label htmlFor="name">이름 입력</label><input id='name' type="text" onChange={e => setName(e.target.value)} />
      <label htmlFor="age">나이 입력</label><input id='age' type="text" onChange={e => setAge(e.target.value)} />
      <label htmlFor="height">키 입력</label><input id='height' type="text" onChange={e => setHeight(e.target.value)} />
      <button onClick={beforeSend}>추가</button>
    </div>
  )
}
export default InputComp;