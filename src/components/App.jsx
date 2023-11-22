import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';

import { BsCardList } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';

import initialContacts from './contacts.json';

import { Main, Wrapper } from './Helper/Layout';
import { HeaderWrap, MainHeader, Header } from './Helper/Headers';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactList } from './ContactList/ContactList';

const storageKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.some(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );

    if (isExist) {
      return toast.error(`${newContact.name}: is already in contacts`);
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value.toLowerCase());
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Main>
      <Wrapper>
        <HeaderWrap>
          <BsBook size="40" />
          <MainHeader>Phonebook</MainHeader>
        </HeaderWrap>
        <ContactForm onAddContact={addContact} />

        <HeaderWrap>
          <BsCardList size="28" />
          <Header>Contacts</Header>
        </HeaderWrap>
        <SearchBar value={filter} onChange={changeFilter} />
        {visibleContacts.length > 0 && (
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        )}
      </Wrapper>

      <GlobalStyle />
      <Toaster />
    </Main>
  );
};
