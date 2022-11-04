import '../css/Personnel.css'

function PersonnelList(props) {
  return(
    <div className='personnel'>
      <div className='personnel-name'>{props.name}</div>
      <div className='personnel-gender'>{props.gender}</div>
      <div className='personnel-height'>{props.height}</div>
    </div>
  )
}

export default PersonnelList;