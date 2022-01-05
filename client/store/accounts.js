import axios from 'axios';

// Action Types
const SET_ACCOUNTS = 'SET_ACCOUNTS';

// Action Creators
const _setAccounts = (accounts) => {
  return {
    type: SET_ACCOUNTS,
    accounts,
  };
};

// Thunk Creators
export const setAccounts = () => async (dispatch) => {
  try {
    const { data } = axios.get('/api/accounts');
    dispatch(_setAccounts(data));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
export default function (accounts = [], action) {
  switch (action.type) {
    case SET_ACCOUNTS:
      return [...action.accounts];
    default:
      return accounts;
  }
}
