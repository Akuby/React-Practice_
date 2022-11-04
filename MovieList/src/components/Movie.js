import '../css/Movie.css'

function Movie(props) { // Movie 컴포넌트에 주입시킨 데이터를 받아온다.
  return ( // props: properties
    <div id='movie'>
      <div id='movieLeft'>
        <img src={props.img} alt='woman'/>
      </div>
      <div id='movieRight'>
        {props.title} | {props.genre} | {props.director} | {props.running_time}분
      </div>
    </div>
  )
}

export default Movie;