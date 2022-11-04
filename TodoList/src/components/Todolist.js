import '../css/Todolist.css'

function Todo(props) { 

  const delTodo = () => {
    const id = props.id
    props.delTodo(id) // 상위로 넘어간 함수는 props로 받는다. 얘가 App가 넘긴 함수.
  }

  return ( 
    <div className='todo'>
      <div className='todo-content'>
        <div>{props.id}</div>
        <div>{props.content}</div>
        <button onClick={delTodo}>X</button> {/*함수형에서는 사용이 또 다르다. this 안쓰고, 함수명 선언해줘야하는 것도 그렇고*/}
      </div>
    </div>
  )
}

export default Todo;