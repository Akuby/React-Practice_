import { Component } from 'react'
import '../css/Personnel.css'

class PersonnelList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      name:props.name,
      height: props.height,
      gender: props.gender
    }
  }


  delPerson=()=>{
    const name=this.props.name
    this.props.delPerson(name)
    //App가 넘긴 함수
}


  updatePerson=()=>{
    alert('수정(p)')
    // 수정 누른다고 데이터를 무조건 보내는 것 아님
    // 수정 불가능 모드일 때, 수정버튼 클릭 시 => 그냥 수정 가능모드로 화면 변경
    // 수정 가능 모드일 때, 저장 버튼 클릭 시 => App.js로 보낸다.

    if(this.state.edit === true) { // 저장하겠단 말
      this.props.updatePerson(this.props.name, this.state.height, this.state.gender)
    }
    this.setState({
      edit: !this.state.edit
    })
  }

  editChange = (e) => {
    // this.setState({
    //   height: e.target.value
    // })
    if(e.target.id === 'editName') {
      this.setState({
        name: e.target.value
      })
    } else if (e.target.id === 'editHeight') {
      this.setState({
        height: parseFloat(e.target.value)
      })
    } else if (e.target.name === 'editGender') {
      this.setState({
        gender: e.target.id
      })
    }
  }

render() { //조건부 렌더링 Condition Rendering
  if(this.state.edit===false) {
    return(
      <div className='personnel'>
        <div className='personnel-name'>{this.props.name}</div>
        <div className='personnel-gender'>{this.props.gender}</div>
        <div className='personnel-height'>{this.props.height}</div>
        <button onClick={this.delPerson}>삭제</button>
        <button onClick={this.updatePerson}>수정</button>
      </div>
      )

  } else if (this.state.edit===true) {
    return(
      <div className='personnel editing'>
        <div>
        <label htmlFor='남'>남</label><input type='radio' name='editGender' id='남' onChange={this.editChange}></input>
        <label htmlFor='여'>여</label><input type='radio' name='editGender' id='여' onChange={this.editChange}></input>
        </div>
        <input id='editHeight' type='text' defaultValue={this.props.height} onChange={this.editChange}/>
        <button onClick={this.delPerson}>삭제</button>
        <button onClick={this.updatePerson}>저장</button>
      </div>
      )
  }
  }
}

export default PersonnelList;