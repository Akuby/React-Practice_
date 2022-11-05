import {Component} from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  pageClick = (data) => { // 클릭한 페이지네이션 값
    this.props.setCurrentPage(data) // App.js에서 넘어온 현재 페이지 설정 함수에다가 페이지네이션 값을 넣어 돌려준다.
  }

  render() {

    // 10 / 3 => 3.333 - js, python
    // 10 / 3 => 3 - c, c++, java

    let pageNumbers = [] // state가 아닌 임시로 만든 배열
    //구조분해할당
    const {total, postPerPage} = this.props
    const endpage = Math.ceil((total) / (postPerPage)) // 4
    for(let i=1; i<=endpage; i++) {
      pageNumbers.push(i)
    }

    const result = pageNumbers.map( // 각각의 pageNumber를 태그로 감싸고, 이벤트 핸들러 등을 부여해서 result로 돌려주는 작업
      (data, idx) => (<span className='page' key={idx} onClick={()=>this.pageClick(data)}>{data}</span>)
    )

    return(
      <div id='pagination'>
        <div>
          페이지 당 개수 : {this.props.postPerPage}
        </div>
        <div>
          총 글 개수 : {this.props.total}
        </div>
        {result}
      </div>
    )
  }
}

export default Pagination;
