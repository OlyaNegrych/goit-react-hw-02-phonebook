import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

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

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    const checkNameList = this.state.contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === name.value.toLocaleLowerCase()
    );

    if (checkNameList) {
      Notiflix.Notify.warning(`${name.value} is already in contacts`);
      return;
    }

    const contact = { id: nanoid(4), name: name.value, number: number.value };
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
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>

        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>

        <Filter onChange={this.onFilterChange} />

        <ContactList
          contacts={this.onFilteredContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}

export default App;

