import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {
  render () {
    const { friendlist: { friendsById }} = this.props;
    const friendsCount = friendsById.length;

    const sliceStart = this.state.pageNumber * 2 - 2;
    const sliceEnd = sliceStart + 2;

    const friendsToDisplayById = friendsById.slice(sliceStart, sliceEnd);

    console.log(sliceStart, sliceStart+1)

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <Pagination friendsCount={friendsCount} navigateToPage={this.navigateToPage.bind(this)} />
        <FriendList friends={friendsToDisplayById} actions={actions} />
      </div>
    );
  }
  
  constructor () {
    super();
    this.state = {
      pageNumber: 1
    };
  }

  navigateToPage(pageNumber) {
    this.setState({pageNumber});
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
