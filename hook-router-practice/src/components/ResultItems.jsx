function ResultItem(props) {
  const {data} = props
  return (
    <li id='result-item'>
    <a href={data.link} target='_blank' rel='noreferrer'>
      <img src={data.image} alt={data.title} className='book-img'/>
      <div className='book-info'>
      <h2>{data.title}</h2>
      <p>부제 | {data.subtitle}</p>
      <p>감독 | {data.director}</p>
      <p>평점 | {data.userRating}</p>
      </div>
    </a>
    </li>
  )
}
export default ResultItem