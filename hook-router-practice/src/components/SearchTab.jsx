import '../css/Common.css'
import {useState} from 'react'
function SearchTab(props) {
  const [searchText, setSearchText] = useState('')
  const doSearch = () => {
    window.location.href = `/search?query=${searchText}&ie=utf8`
  }
  return(
    <div id="SearchTab">
      <input type="text" onChange={e => setSearchText(e.target.value)}/>
      <button onClick={doSearch}>검색</button>
    </div>
  )
}
export default SearchTab;