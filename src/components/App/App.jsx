import { useSelector, useDispatch } from 'react-redux';

import css from './App.module.css';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { addContact, removeContact } from 'redux/contactItems/items-actions';
import { setFilter } from 'redux/filter/filter-actions';

const App = () => {
  const dispatch = useDispatch();
  const newContacts = useSelector(store => store.items);
  const filter = useSelector(store => store.filter);

  const onAddContact = payload => {
    if (newContacts.find(contact => contact.name === payload.name)) {
      return alert(`${payload.name} is already in contact list`);
    }
    const action = addContact(payload);

    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
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
