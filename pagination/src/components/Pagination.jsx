import {Component} from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div id='pagination'>
        <div>
          페이지 당 개수 : {this.props.postPerPage}
        </div>
        <div>
          총 글 개수 : {this.props.total}
        </div>
      </div>
    )
  }
}

export default Pagination;
