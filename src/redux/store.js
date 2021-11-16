import { configureStore } from '@reduxjs/toolkit';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import logger from 'redux-logger';
import contactsReducer from 'redux/reducer';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
