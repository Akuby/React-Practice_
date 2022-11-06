import {Component} from 'react';
import '../css/Pagination.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"; // 공홈 설명과 다르게 중괄호 필요


class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      endpage : Math.ceil((this.props.total) / (this.props.postPerPage))
    }
  }

  pageClick = (data) => { // 클릭한 페이지네이션 값
    this.props.setCurrentPage(data) // App.js에서 넘어온 현재 페이지 설정 함수에다가 페이지네이션 값을 넣어 돌려준다.
  }

  prevPage = () => {
    const prevPage = this.props.currentPage - 1
    prevPage < 1 ? alert('첫 번째 페이지입니다') : this.props.setCurrentPage(prevPage)
  }

  nextPage = () => {
    const nextPage = this.props.currentPage + 1
    nextPage > this.state.endpage ? alert('마지막 페이지입니다') : this.props.setCurrentPage(nextPage)
  }

  firstPage = () => {
    this.props.setCurrentPage(1)
  }

  lastPage = () => {
    this.props.setCurrentPage(this.state.endpage)
  }

  render() {

    // 10 / 3 => 3.333 - js, python
    // 10 / 3 => 3 - c, c++, java

    let pageNumbers = [] // state가 아닌 임시로 만든 배열
    //구조분해할당
    for(let i=1; i<=this.state.endpage; i++) { pageNumbers.push(i) }

    const result = pageNumbers.map( // 각각의 pageNumber를 태그로 감싸고, 이벤트 핸들러 등을 부여해서 result로 돌려주는 작업
      (data, idx) => 
      (<span 
        className={this.props.currentPage === data ? 'active' : 'page'} 
        key={idx} 
        onClick={()=>this.pageClick(data)}>{data}
        </span>)
    )

    return(
      <div id='pagination'>
        <div id='page-info'>
        <div className='page-info'>
          현재 페이지 : {this.props.currentPage}
        </div>
        <div className='page-info'>
          페이지 당 개수 : {this.props.postPerPage}
        </div>
        <div className='page-info'>
          총 글 개수 : {this.props.total}
        </div>
        </div>
        <div id='page'>
        <span onClick={this.firstPage}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </span>
        <span onClick={this.prevPage}>
        <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        {result}
        <span onClick={this.nextPage}>
        <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span onClick={this.lastPage}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
        </span>
        </div>
      </div>
    )
  }
}

export default Pagination;
