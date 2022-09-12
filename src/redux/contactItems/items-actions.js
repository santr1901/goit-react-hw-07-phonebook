import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const removeContact = createAction('contact/remove');

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
