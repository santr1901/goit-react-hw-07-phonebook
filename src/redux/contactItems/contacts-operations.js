import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/api/contacts';
// import actions from './items-actions';
/**With AsyncThunk------------------------------------------------- */
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (contacts.items.find(contact => contact.name === data.name)) {
        alert(`${data.name} is already in contact list`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/**------------------------------------------------- */

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsLoading());
//       const data = await api.getContacts();
//       dispatch(actions.fetchContactsSuccess(data));
//     } catch (error) {
//       const { message, response } = error;
//       const data = { message, status: response.status };
//       dispatch(actions.fetchContactsError(data));
//     }
//   };
//   return func;
// };

// export const addContact = data => {
//   const func = async (dispatch, getState) => {
//     const store = getState();
//     if (store.items.items.find(contact => contact.name === data.name)) {
//       return alert(`${data.name} is already in contact list`);
//     }
//     try {
//       dispatch(actions.addContactLoading());
//       const result = await api.addContact(data);
//       dispatch(actions.addContactSuccess(result));
//     } catch (error) {
//       dispatch(actions.addContactError(error.message));
//     }
//   };
//   return func;
// };

// export const removeContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.removeContactLoading());
//       await api.removeContact(id);
//       dispatch(actions.removeContactSuccess(id));
//     } catch (error) {
//       dispatch(actions.removeContactError(error.message));
//     }
//   };
//   return func;
// };
