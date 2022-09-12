import { createSlice } from '@reduxjs/toolkit';

/** using createSlice */

const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: (store, { payload }) => {
      store.push(payload);
    },
    removeContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
