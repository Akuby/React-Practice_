import '../css/Person.css'

function Person(props) { // Person 컴포넌트에 주입시킨 데이터를 받아온다.
  return ( // props: properties
    <div id="person">
      <div>
        {props.name}
      </div>
      <div>
        {props.age}
      </div>
      <div>
        {props.height}
      </div>
    </div>
  )
}

export default Person;