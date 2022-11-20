import '../css/Common.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import queryString from 'query-string';
import ResultItem from './ResultItems';
import Pagination from './Pagination';

function SearchResult() {
  const [movieData, setMovieData] = useState([{}])
  const itemPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const query = window.location.search
    const queryObj = queryString.parse(query) // queryString은 변수이름으로 쓸 수 없다
    const searchText = queryObj.query
    getData(searchText)
  }, [])
  const getData = async(searchValue) => {
    const ID_KEY = 'G_ZvwG5McXcQ6UrCuWcv'
    const SECRET_KEY = 'Y28iSq77Zc'
    await axios.get('v1/search/movie.json',{
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
      const result = res.data.items;
      setMovieData(result)
      
    }).catch((err) => {
      console.log('error!', err)
    })
  }

  const currentPostList= (postList) => {
    const startIdx = (currentPage-1) * itemPerPage
    const endIdx = startIdx + itemPerPage
    const slicedList = postList.slice(startIdx,endIdx)
    return slicedList;
  }
  
  const resultItems = currentPostList(movieData).map(
    (data, idx) => (<ResultItem data={data} key={idx}/>)
  )
  
  return(
    <div id="SearchResult">
      <h1>SearchResult</h1>
      {resultItems}
      <Pagination total={movieData.length} itemPerPage={itemPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
export default SearchResult;