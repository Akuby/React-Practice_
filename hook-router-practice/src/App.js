import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchResult from './components/SearchResult';
import SearchTab from './components/SearchTab';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchTab/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
