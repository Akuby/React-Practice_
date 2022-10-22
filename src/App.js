import './App.css';
import axios from 'axios'; 
// axios 모듈에서 axios 함수를 불러온다
// axios를 쓰는 목적은 서버에 데이터를 요청할 때 비동기적으로 요청하기 위함

// 함수형 컴포넌트
function App() {

  const selectAll = async() => {
    alert('모두조회!');
    const result = await axios.get('/movie');
    console.log(result);
    // 원래 서버 주소까지 다 적어야 찾아감
    // http://localhost:4000/moives
    // ES6 - template string, '''async await''', arrow function, const let 등..
  }
  
  const selectWhere = async() => {
    alert('조건조회!');
    const result = await axios.get('/movie/' + 3);
    console.log(result);
  }

  const insertData = async() => {
    alert('데이터 전송');
    let insertDataName = document.getElementById('insertDataName').value;
    let insertDataDirector = document.getElementById('insertDataDirector').value;
    let insertDataRuntime = parseInt(document.getElementById('insertDataRuntime').value);
    const movieObj = {id: 7, title: insertDataName, director:insertDataDirector, running_time:insertDataRuntime}
    // console.log(movieObj)
    const result = await axios.post('/movie', movieObj);
    console.log(result);
    // post는 추가 요청할 때 사용
    // post는 콤마 찍고 객체 넣으면 알아서 넘어간다. like magic...
    // 그러나 암호화되어 넘어가기 때문에 파싱해줘야한다.
  }

  const updateData = async() => {
    alert('데이터 수정');
    const updateObj = {id:3, director:'성시경', running_time:120}
    const result = await axios.put('/movie', updateObj);
    console.log(result);
  }

  const deleteData = async() => {
    alert('데이터 삭제');
    // const deleteObj = {id:7} // 왜 안가지
    const result = await axios.delete('/movie/' + 7);
    console.log(result);
  }


  return (
    <div className="App">
      <h1>React-Express-MySQL 연결</h1>
      <button onClick={selectAll}>모두조회</button>    
      <button onClick={selectWhere}>조건조회</button><br />
      <input id='insertDataName' placeholder='추가할 영화 이름을 입력하세요'></input><input id='insertDataDirector' placeholder='추가할 영화 감독을 입력하세요'></input><input id='insertDataRuntime' placeholder='추가할 영화 런타임을 입력하세요'></input><button onClick={insertData}>추가</button><br />
      <input id='updateDataIdx' placeholder='수정할 인덱스를 입력하세요'></input><input id='updateDataName' placeholder='새로운 이름을 입력하세요'></input><button onClick={updateData}>수정</button><br />
      <input id='deleteData' placeholder='삭제할 인덱스를 입력하세요'></input><button onClick={deleteData}>삭제</button>
    </div>
  );
}

export default App;
