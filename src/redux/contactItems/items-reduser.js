// import { createReducer } from '@reduxjs/toolkit';
// import actions from './items-actions';

/* Redux-toolkit */

// const initialStore = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const contactsReducer = createReducer(initialStore, {
//   [actions.fetchContactsLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.fetchContactsSuccess]: (store, { payload }) => {
//     store.items = payload;
//     store.loading = false;
//   },
//   [actions.fetchContactsError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },
//   [actions.addContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.addContactSuccess]: (store, { payload }) => {
//     store.loading = false;
//     store.items.push(payload);
//   },
//   [actions.addContactError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },

//   [actions.removeContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.removeContactSuccess]: (store, { payload }) => {
//     store.loading = false;
//     store.items = store.items.filter(({ id }) => id !== payload);
//   },
//   [actions.removeContactError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },
// });

// export default contactsReducer;
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
