import {AUTH_SIGNUP} from '../actions/actionTypes'

const initialState = {
  authData: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP: 
      return {
        ...state,
        authData: action.authData
      }
    default:
      return state;
  }
}

export default reducer;