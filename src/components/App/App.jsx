import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './App.module.css';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
// import { addContact, removeContact } from 'redux/contactItems/items-actions';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contactItems/contacts-operations';

import { setFilter } from 'redux/filter/filter-actions';

const App = () => {
  const dispatch = useDispatch();
  const newContacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const getFilterContact = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return newContacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <div>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={onSetFilter} />

        <ContactList
          contacts={getFilterContact()}
          removeContact={onRemoveContact}
        />
      </div>
    </div>
  );
};

export default App;
