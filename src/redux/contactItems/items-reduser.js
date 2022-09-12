import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './items-actions';

/* Redux-toolkit */
const contactsReducer = createReducer([], {
  [addContact]: (store, { payload }) => {
    store.push(payload);
  },
  [removeContact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;
/**-------------------------------------------------------- */

/* Redux */
// const initialStore = [];

// const contactsReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...store, payload];
//     case removeContact.type:
//       return store.filter(({ id }) => id !== payload);

//     default:
//       return store;
//   }
// };
