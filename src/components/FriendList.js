import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {
    return (
      <ul className={styles.friendList}>
        {
          this.props.friends.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={index + this.props.pageOffsetsId }
                name={friend.name}
                gender={friend.gender}
                starred={friend.starred}
                {...this.props.actions} />
            );
          })
        }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  pageOffsetsId: PropTypes.number.isRequired
};

export default FriendList;
