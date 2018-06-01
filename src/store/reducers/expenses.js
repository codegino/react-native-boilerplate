import { FETCH_EXPENSES_SUCCESS, ADD_EXPENSES_SUCCESS } from '../actions/expenses';

const initialState = {
  expenses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.expenses, 
      };
    case ADD_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: state.expenses.concat(action.item),
      };
    default:
      return state;
  }
};

export default reducer;
