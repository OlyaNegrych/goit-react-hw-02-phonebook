import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Section from '../Section/Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    // e.preventDefault();
    // const { name, number } = e.target.elements;

    const checkNameList = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNameList) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    const contact = { id: nanoid(4), name: name, number: number };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onFilteredContacts = () => {
    const contacts = this.state.contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <Section title='Phonebook'>
          <ContactForm onFormSubmit={this.handleSubmit} />
        </Section>

        <Section title='Contacts'>
          {' '}
          <Filter onChange={this.onFilterChange} value={this.state.filter} />
          <ContactList
            contacts={this.onFilteredContacts()}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;

