const initialState = {
  
}

export const friendsReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCHING_FRIENDS':
      return Object.assign({}, state, { fetchingFriends: true });

    case 'FRIENDS_FETCHED':
      return Object.assign({}, state, { friends: action.payload, friendsFetched: true, fetchingFriends: false });

    default:
      return state;
  }
}