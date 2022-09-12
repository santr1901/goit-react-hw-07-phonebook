import { configureStore, combineReducers } from '@reduxjs/toolkit';

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
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactItems/items-reduser';
import filterReducer from './filter/filter-reduser';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const contactsPersistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// import rootReducer from './rootReducer';

// const store = configureStore(rootReducer);
