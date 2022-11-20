import '../css/ResultItem.css'
function ResultItem(props) {
  return (
    <li id='result-item'>
    <a href={props.link} target='_blank' rel='noreferrer'>
      <img src={props.image} alt={props.title} className='book-img'/>
      <div className='book-info'>
      <h2>{props.title}</h2>
      <p>부제 | {props.subtitle}</p>
      <p>감독 | {props.director}</p>
      <p>평점 | {props.userRating}</p>
      </div>
    </a>
    </li>
  )
}
export default ResultItem