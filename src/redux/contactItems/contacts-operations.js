import * as api from 'service/api/contacts';
import actions from './items-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      const { message, response } = error;
      const data = { message, status: response.status };
      dispatch(actions.fetchContactsError(data));
    }
  };
  return func;
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    const store = getState();
    if (store.items.items.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is already in contact list`);
    }
    try {
      dispatch(actions.addContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };
  return func;
};

export const removeContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.removeContactLoading());
      await api.removeContact(id);
      dispatch(actions.removeContactSuccess(id));
    } catch (error) {
      dispatch(actions.removeContactError(error.message));
    }
  };
  return func;
};
