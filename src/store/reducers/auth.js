import { AUTH_SIGNUP } from '../actions/actionTypes';

const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        ...state,
        token: action.authData.idToken,
      };
    default:
      return state;
  }
};

export default reducer;
