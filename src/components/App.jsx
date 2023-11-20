import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
            newContact.name.toLowerCase().trim() ||
          contact.number.trim() === newContact.number.trim()
      )
    ) {
      toast.error(`${newContact.name}: is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Main>
        <Wrapper>
          <HeaderWrap>
            <BsBook size="40" />
            <MainHeader>Phonebook</MainHeader>
          </HeaderWrap>
          <ContactForm onAddContact={this.addContact} />

          <HeaderWrap>
            <BsCardList size="28" />
            <Header>Contacts</Header>
          </HeaderWrap>
          <SearchBar value={filter} onChange={this.changeFilter} />
          {visibleContacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          )}
        </Wrapper>

        <GlobalStyle />
        <Toaster />
      </Main>
    );
  }
}
