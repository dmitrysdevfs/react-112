import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import localeReducer from './localeSlice';
import notesReducer from './notesSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const balancePersistConfig = ;

const persistedBalanceReducer = persistReducer(
  {
    key: 'user_balance',
    storage,
    whitelist: ['value'],
  },
  balanceReducer
);

const persistedLocaleReducer = persistReducer(
  {
    key: 'app_lang',
    storage,
    whitelist: ['lang'],
  },
  localeReducer
);

const persistedNotesReducer = persistReducer(
  {
    key: 'user_notes',
    storage,
    whitelist: ['items'],
  },
  notesReducer
);

// const initialState = {
//   balance: {
//     value: 0,
//   },
//   locale: {
//     lang: 'uk',
//   },
//   notes: {
//     items: ['JS', 'TS', 'Rect', 'Node'],
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case 'balance/deposit':
//     //   return {
//     //     ...state,
//     //     balance: {
//     //       value: state.balance.value + action.payload,
//     //     },
//     //   };

//     // case 'balance/withdraw':
//     //   return {
//     //     ...state,
//     //     balance: {
//     //       value: state.balance.value - action.payload,
//     //     },
//     //   };

//     // case 'locale/changeLang':
//     //   return {
//     //     ...state,
//     //     locale: {
//     //       lang: action.payload,
//     //     },
//     //   };

//     case 'notes/addNote':
//       return {
//         ...state,
//         notes: {
//           items: [...state.notes.items, action.payload],
//         },
//       };

//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    locale: persistedLocaleReducer,
    notes: persistedNotesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const addNote = createAction('notes/addNote');
