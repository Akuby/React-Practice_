import '../css/Personnel.css'

function PersonnelList(props) {
  const delPerson=()=>{
    const name=props.name
    props.delPerson(name)
    //App가 넘긴 함수
}
  return(
    <div className='personnel'>
      <div className='personnel-name'>{props.name}</div>
      <div className='personnel-gender'>{props.gender}</div>
      <div className='personnel-height'>{props.height}</div>
      <button onClick={delPerson}>삭제</button>
    </div>
  )
}

export default PersonnelList;