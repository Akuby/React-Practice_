import '../css/Pagination.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
function Pagination(props) {
  // total, postPerPage, currentPage
  const {total, postPerPage, currentPage, setCurrentPage} = props
  const endPage = Math.ceil(total / postPerPage)
  const pageNumbers = []
  for (let i = 1; i <= endPage; i++) { pageNumbers.push(i) }  

  const pageClick = (page) => {
    setCurrentPage(page)
  }

  const toFirstPage = () => {
    setCurrentPage(1)
  }
  const toLastPage = () => {
    setCurrentPage(endPage)
  }
  const pageNums = pageNumbers.map(
    (data, idx) => (<button key={idx} className={currentPage === data ? 'active' : 'page'} onClick={()=>pageClick(data)}>{data}</button>)
  )
  return (
    <div className="Pagination">
      <button className='navigator' onClick={toFirstPage}>
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
      {pageNums}
      <button className='navigator' onClick={toLastPage}>
      <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    </div>
  );
}

export default Pagination;
