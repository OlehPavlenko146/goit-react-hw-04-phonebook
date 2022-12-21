import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyles';
import { Container, Title, ConactsTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={addNewContact} />
      <ConactsTitle>Contacts</ConactsTitle>
      <Filter value={filter} onChange={changeFilter} />

      <ContactsList
        contacts={filterContacts}
        onDeleteContact={deleteContacts}
      />

      <GlobalStyle />
    </Container>
  );
};
