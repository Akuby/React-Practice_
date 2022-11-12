import { Component } from 'react';
import '../css/SearchResult.css'
import queryString from 'query-string';
import axios from 'axios';
class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue:''
    }
  }
  componentDidMount() {
    // DOM이 완성되면 자동호출
    const query = window.location.search
    const queryObj = queryString.parse(query)
    this.setState({searchValue: queryObj.query})
    setTimeout(() => {
      this.getData(this.state.searchValue)
    }, 1);
  }

  getData = async(searchValue) => {
    const ID_KEY = 'G_ZvwG5McXcQ6UrCuWcv'
    const SECRET_KEY = 'Y28iSq77Zc'
    await axios.get('v1/search/book.json',{
      params: {
        query: searchValue,
        display: 20
      },
      headers : {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY
      }
    },
    ).then((res) => {
      console.log('succeed!', res.data.items)
    }).catch((err) => {
      console.log('error!', err)
    })
  }

  render() {
    return(
      <div id='SearchResult'>
        <h1>{this.state.searchValue}의 검색결과</h1>
        <a href="/">to home</a>
      </div>
    )
  }
}
export default SearchResult;