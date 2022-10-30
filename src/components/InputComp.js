// 입력한 값을 기억해야하기 때문에 클래스형으로 작성하는게 좋다.
import {Component} from 'react';
import '../css/InputComp.css'
class InputComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gender:'',
      height:0,
    }
  }


  addPerson = () => {
    const person = this.state
    this.props.addPerson(person)
  }



  inputChange = (e) => {
    if(e.target.id === 'name') {
      this.setState({
        name: e.target.value
      })
    } else if (e.target.id === 'height') {
      this.setState({
        height: parseFloat(e.target.value)
      })
    } else if (e.target.name === 'gender') {
      this.setState({
        gender: e.target.id
      })
    }
  }

  render() {
    return(
      <div id='input-comp'>
        <div>
        <input type='text' placeholder='이름 입력' onChange={this.inputChange} id='name'></input>
        </div>
        <div>
        <label htmlFor='남'>남</label><input type='radio' name='gender' id='남' onChange={this.inputChange}></input>
        <label htmlFor='여'>여</label><input type='radio' name='gender' id='여' onChange={this.inputChange}></input>
        </div>
        <div>
        <input type='text' placeholder='키 입력' onChange={this.inputChange} id='height'></input>
        </div>
        <div>
        <button onClick={this.addPerson}>추가</button>
        </div>
      </div>
    )
  }
}

export default InputComp;