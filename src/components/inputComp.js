// 입력한 값을 기억해야하기 때문에 클래스형으로 작성하는게 좋다.
import {Component} from 'react';
import '../css/InputComp.css'
class InputComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
  }
  addTodo = () => { //얘만의 addTodo
    const text = this.state.text // onChange로 받아 놓은 값
    this.props.addTodo(text) // App.js가 넘긴 addTodo. 둘이 다름. 이 넘겨받은 함수 매개변수에 값을 넘겨준다.
  }

  inputChange = (e) => { // 매개변수 e에 이벤트 객체가 넘어온다.
    // 이제 이걸 어떻게 위로 보내냐...
    // 1. 이벤트 값을 일단 이 컴포넌트 내에 임시로 저장한다.
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return(
      <div id='input-comp'>
        <input type='text' placeholder='할 일 입력' onChange={this.inputChange}></input>
        <button onClick={this.addTodo}>추가</button>
      </div>
    )
  }
}

export default InputComp;