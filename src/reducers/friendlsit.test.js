import * as types from '../constants/ActionTypes';
import friendlist from './friendlist';

const initialState = {
  friendsById: [
    {
      name: 'Marie Curie',
      starred: true,
      gender: 'female'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male'
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male'
    }
  ]
};

describe('friendlist reducers', () => {

  it('should return initial state', () => {
    expect(friendlist(initialState, ''))
      .toEqual(initialState)
    expect(friendlist(undefined, ''))
      .toEqual(initialState)
    expect(friendlist(initialState, 'ACTION_NOT_DEFINED'))
      .toEqual(initialState)
  });

  it('should add friend to friend list', () => {
    const fakeAction = {
      type: types.ADD_FRIEND,
      name: 'George Bush',
      gender: 'male'
    };

    expect(friendlist(initialState, fakeAction))
      .toEqual({
        ...initialState,
        friendsById: [
          ...initialState.friendsById,
          {
            name: fakeAction.name,
            gender: fakeAction.gender
          }
        ],
      })
  });

  it('should delete friend from friend list', () => {
    const fakeAction = {
      type: types.DELETE_FRIEND,
      id: 1
    }

    expect(friendlist(initialState, fakeAction))
      .toEqual({
        ...initialState,
        friendsById: initialState.friendsById.filter((item, index) => index !== fakeAction.id)
      })
  });

  it('should star a friend from friend list', () => {
    const fakeAction = {
      type: types.STAR_FRIEND,
      id: 1
    };

    let newFakefriends = [...initialState.friendsById];
    let newFakefriend = newFakefriends.find((item, index) => index === fakeAction.id);
    newFakefriend.starred = !newFakefriend.starred;

    expect(friendlist(initialState, fakeAction))
      .toEqual({
        ...initialState,
        friendsById: newFakefriends
      })
  });

});