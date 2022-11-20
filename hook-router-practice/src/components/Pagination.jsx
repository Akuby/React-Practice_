import '../css/Common.css'
function Pagination(props) {
  // total, postPerPage, currentPage
  const {total, itemPerPage, currentPage, setCurrentPage} = props
  const endPage = Math.ceil(total / itemPerPage)
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
      <button onClick={toFirstPage}>&lt;</button>
      {pageNums}
      <button onClick={toLastPage}>&gt;</button>
    </div>
  );
}

export default Pagination;
