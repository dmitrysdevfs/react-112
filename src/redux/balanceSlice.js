import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
      // return {
      //   ...state,
      //   value: state.value + action.payload,
      // };
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
      // return {
      //   ...state,
      //   value: state.value - action.payload,
      // };
    },
  },
});

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;

console.log(slice);

// slice.actions.deposit(5);

// export const deposit = createAction('balance/deposit');

// export const withdraw = createAction('balance/withdraw');

// const initialState = {
//   value: 0,
// };

// export default function balanceSliceReducer(state = initialState, action) {
//   console.log('balanceSliceReducer:', state, action);
//   switch (action.type) {
//     case 'balance/deposit':
// return {
//   ...state,
//   value: state.value + action.payload,
//       };

//     case 'balance/withdraw':
// return {
//   ...state,
//   value: state.value - action.payload,
// };

//     default:
//       return state;
//   }
// }
