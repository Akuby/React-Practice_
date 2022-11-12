import '../css/ResultItem.css'
function ResultItem(props) {
  return (
    <li id='result-item'>
    <a href={props.link} target='_blank' rel='noreferrer'>
      <img src={props.image} alt={props.title} className='book-img'/>
      <div className='book-info'>
      <h2>{props.title}</h2>
      <p>저자 | {props.author}</p>
      <p>출판사 | {props.pub}</p>
      <p>가격 | {props.price}</p>
      </div>
    </a>
    </li>
  )
}
export default ResultItem