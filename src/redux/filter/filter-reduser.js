import { setFilter } from './filter-actions';
import { createReducer } from '@reduxjs/toolkit';

// const initialStore = '';
const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
// const filterReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return store;
//   }
// };

export default filterReducer;
