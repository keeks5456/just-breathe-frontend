
const initialState = {
   contents: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
      case SET_CURRENT_USER:
        return {
          // turn an empty object into false or an object with keys to be true
          isAuthenticated: !!(Object.keys(action.user).length),
          user: action.user
        };
      default:
        return state;
    }
  }