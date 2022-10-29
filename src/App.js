import './App.css';
import { Component } from 'react';
import Movie from './components/Movie.js'
import lee_image from './images/movie.jpg'
class App extends Component { // App 클래스가 Component 클래스에게 상속을 받는다.
  constructor(props) { // 생성자 : 객체가 생성될 때 호출됨
    super(props) // 상위 클래스 생성자 호출()
    this.state = {
      // 상태값
      movieList: [
        {profileImg: lee_image, title: '블랙 아담', genre:'액션', director: '자움 콜렛 세라', running_time: 125},
        // {title: '인생은 아름다워', genre:'뮤지컬', director: '최국희', running_time: 122},
        // {title: '공조2:인터내셔널', genre:'액션', director: '이석훈', running_time: 129},
        // {title: '극장판 짱구는 못말려:수수께끼! 꽃피는 천하떡잎학교', genre:'애니메이션', director: '타카하시 와타루', running_time: 105},
        // {title: '에브리씽 에브리웨어 올앳원스', genre:'코미디', director: '다니엘 콴', running_time: 139},
        // {title: '오펀:천사의탄생', genre:'공포', director: '윌리엄 브렌트 벨', running_time: 98}
      ] // 길이가 3인 JSON 배열
    }
  }

  render() { // 라이프사이클 함수

    const result = this.state.movieList.map(
      (data) => (
        <Movie 
        key={data.title}
        img={data.profileImg}
        title={data.title} genre={data.genre} director={data.director} running_time={data.running_time}/>
      )
    )

    return(
      <div id='App'>
        {result}
      </div>
    )
  }

}

export default App;
