import { configureStore, createAction } from '@reduxjs/toolkit';

const initialState = {
  balance: {
    value: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };

    case 'balance/withdraw':
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

export const deposit = createAction('balance/deposit');

export const withdraw = createAction('balance/withdraw');
