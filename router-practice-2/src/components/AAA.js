import '../css/AAA.css'
import SubA1 from './AAA/SubA1'
import SubA2 from './AAA/SubA2'
import {Routes, Route} from 'react-router-dom'
function AAA() {
  const pageMove = () => {
    window.location.href = `/AAA/SubA1`
  }
  return(
    <div id='AAA'>
      <h1>This is AAA</h1>
      <ul>
        <li onClick={pageMove}>to SubA1</li>
        <li><a href="/AAA/SubA2">to SubA2</a></li>
      </ul>
      <a href="/">to Home</a>
      <Routes>
        {/* 여기서 라우트하여 불러오는 페이지는 새롭게 이동하지 않고 바로 현재 페이지에 불러온다. */}
        <Route path='SubA1' element={<SubA1 />} />
        <Route path='SubA2' element={<SubA2 />} />
      </Routes>
    </div>
  )
}
export default AAA;