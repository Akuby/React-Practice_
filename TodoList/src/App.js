import './App.css';
import { Component } from 'react';
import Todo from './components/Todolist.js'
import InputComp from './components/inputComp';
class App extends Component { // App 클래스가 Component 클래스에게 상속을 받는다.
  constructor(props) { // 생성자 : 객체가 생성될 때 호출됨
    super(props) // 상위 클래스 생성자 호출()
    this.state = {
      // 상태값
      todoList: [
        // {id:1, text: '공부하기'},
        // {id:2, text: '청소하기'},
        // {id:3, text: '요리하기'}
      ]
    }
  }

  addTodo = (input) => { 
    let idx = this.state.todoList.length + 1
    const todoObj = {id:idx, text:input}
    const concatList = this.state.todoList.concat(todoObj)
    // concat은 배열에 항목 추가하고 추가된 항목이 return 됨
    this.setState({
      todoList: concatList
    })
  }

  delTodo = (input) => {
    // 삭제는 filter
    const filteredList = this.state.todoList.filter(
      (data) => (data.id !== input)
    )
    this.setState({
      todoList: filteredList
    })
  }

  render() { // 라이프사이클 함수

    const result = this.state.todoList.map(
      (data) => ( // 중괄호가 아닌 소괄호 사용 !!
        <Todo 
        key={data.id} 
        id={data.id} 
        content={data.text} 
        delTodo={this.delTodo}/>
      )
    )

    return(
      <div id='App'>
        <InputComp addTodo={this.addTodo}/> {/*하위 컴포넌트로 주입*/}
        {result}
      </div>
    )
  }

}

export default App;
