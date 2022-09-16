// import { createAction } from '@reduxjs/toolkit';

// export const fetchContactsLoading = createAction('contacts/fetch/loading');
// export const fetchContactsSuccess = createAction('contacts/fetch/success');
// export const fetchContactsError = createAction('contacts/fetch/error');

// export const addContactLoading = createAction('contacts/add/loading');
// export const addContactSuccess = createAction('contacts/add/success');
// export const addContactError = createAction('contacts/add/error');

// export const removeContactLoading = createAction('contacts/remove/loading');
// export const removeContactSuccess = createAction('contacts/remove/success');
// export const removeContactError = createAction('contacts/remove/error');

// const actions = {
//   fetchContactsLoading,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactLoading,
//   addContactSuccess,
//   addContactError,
//   removeContactLoading,
//   removeContactSuccess,
//   removeContactError,
// };

// export default actions;
/**-------------------------------------------------------------------- */
// export const addContact = createAction('contact/add', data => {
//   return {
//     payload: {
//       ...data,
//       id: nanoid(),
//     },
//   };
// });

/** Redux */
// import { ADD_CONTACT, REMOVE_CONTACT } from './items-types';

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const removeContact = payload => {
//   return {
//     type: REMOVE_CONTACT,
//     payload,
//   };
// };
