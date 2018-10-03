import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Pagination.css';

export default class Pagination extends Component {
  render() {
    const pagesCount = Math.ceil(this.props.friendsCount / 2);

    let pageNumbers = [];
    for (let i = 0; i < pagesCount; i++) {
      pageNumbers.push(<li key={i} >
        <a href="#!" id={i+1} onClick={this.handlePageChange.bind(this)} >{i+1}</a>
      </li>);
    }

    return (
      <nav aria-label="Page navigation" className={styles.paginationNav} >
        <ul className={classnames('pagination pagination-sm', styles.m0)}>
          { pageNumbers }
        </ul>
      </nav>
    );
  }

  handlePageChange(e) {
    e.preventDefault();
    this.props.navigateToPage(Number(e.target.id));
  }
}

Pagination.propTypes = {
  friendsCount: PropTypes.number.isRequired,
  navigateToPage: PropTypes.func.isRequired
};
