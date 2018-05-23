export const FETCH_EXPENSES_START = 'FETCH_EXPENSES_START';
export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
export const FETCH_EXPENSES_FAIL = 'FETCH_EXPENSES_FAIL';
export const ADD_EXPENSES_START = 'ADD_EXPENSES_START';
export const ADD_EXPENSES_SUCCESS = 'ADD_EXPENSES_SUCCESS';
export const ADD_EXPENSES_FAIL = 'ADD_EXPENSES_FAIL';

type ExpenseItem = {
  name: string,
  price: number,
  date: string,
};

export const fetchExpenses = () => ({
  type: FETCH_EXPENSES_START,
});

export const fetchExpensesSuccess = (expenses: Array) => ({
  type: FETCH_EXPENSES_SUCCESS,
  expenses,
});

export const fetchExpensesFail = () => ({
  type: FETCH_EXPENSES_FAIL,
});

export const addExpenses = (item: ExpenseItem) => ({
  type: ADD_EXPENSES_START,
  item,
});

export const addExpensesSuccess = (item: ExpenseItem) => ({
  type: ADD_EXPENSES_SUCCESS,
  item,
});

export const addExpensesfail = () => ({
  type: ADD_EXPENSES_FAIL,
});
