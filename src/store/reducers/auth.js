import { AUTH_SIGNUP, AUTH_LOGIN } from '../actions/auth';

const initialState = {
  userId: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default reducer;
