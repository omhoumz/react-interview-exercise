import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div className={styles.addFriendInputWrapper}>
      <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            autoFocus="true"
            name="name"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}/>
          <div className={styles.addFriendGender}>
            <label className="radio-inline">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={ this.state.gender === "male" }
                onChange={this.handleChange.bind(this)} /> Male
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={ this.state.gender === "female" }
                onChange={this.handleChange.bind(this)} /> Female
            </label>
          </div>
      </form>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || ''
    };
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const { name, gender } = this.state
    this.props.addFriend({ name, gender });
    this.setState({ name: '', gender: '' });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
