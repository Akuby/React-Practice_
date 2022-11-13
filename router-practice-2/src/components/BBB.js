import '../css/BBB.css'
import SubB1 from './BBB/SubB1'
import SubB2 from './BBB/SubB2'
import {Routes, Route} from 'react-router-dom'
function BBB() {
  return(
    <div id='BBB'>
      <h1>This is BBB</h1>
      <ul>
        <li><a href="/BBB/SubB1">to SubB1</a></li>
        <li><a href="/BBB/SubB2">to SubB2</a></li>
      </ul>
      <a href="/">to Home</a>
      <Routes>
        <Route path='SubB1' element={<SubB1 />} />
        <Route path='SubB2' element={<SubB2 />} />
      </Routes>
    </div>
  )
}
export default BBB;