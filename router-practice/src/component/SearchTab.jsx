import { Component } from 'react';
import '../css/SearchTab.css'
class SearchTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  inputChange = (e) => {
    this.setState({inputValue : e.target.value})
  }
  doSearch = () => {
    // url 변경은 location 객체를 사용한다.
    // history.push도 있다고 하니 한번 찾아보기 ( 여기선 적용이 안되더라 )
    const {inputValue} = this.state
      // alert 띄운 다음 input 어떻게 초기화하지
    inputValue.trim() === '' ? alert('검색어를 입력하세요!') : window.location.href=`/searchResult?query=${inputValue.trim()}&encoding=utf-8`
  }
  render() {
    return (
      <div id='search-tab'>
        <input type='text' placeholder='검색어를 입력하세요' onChange={this.inputChange}/>
        <button onClick={this.doSearch}>검색</button>
      </div>
    )
  }
}
export default SearchTab;