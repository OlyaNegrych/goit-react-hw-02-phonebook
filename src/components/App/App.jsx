import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

class App extends Component {
  static propTypes = {
    //
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const checkNameList = this.state.contacts.some(
      contact => contact.name === name.value
    );

    if (checkNameList) {
      Notiflix.Notify.warning(`${name.value} is already in contacts`);
      return;
    } else {
      const contact = { id: nanoid(4), name: name.value, number: number.value };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));

      this.resetForm();
    }
    // onFilter = e => {
    //   this.setState({ filter: e.target.value });
    // };
    // onDeleteContact = contactId => {
    //   this.setState(prevState => ({
    //     contacts: prevState.contacts.filter(
    //       contact => contact.id !== contactId
    //     ),
    //   }));
    // };

    // onVisibleContacts = () => {
    //   const { filter, contacts } = this.state;
    //   const filtered = filter.toLowerCase();
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filtered)
    //   );
    // };
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <label>
          Find contacts by name
          <input type="name" name="find"></input>
        </label>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {' '}
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;

// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import PropTypes from 'prop-types';
// import {
//   ErrorText,
//   FormBlock,
//   Label,
//   Input,
//   Button,
// } from './ContactForm.styled';

// const validationSchema = Yup.object({
//   name: Yup.string().required(),
//   number: Yup.string().required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// export const ContactForm = ({ onAddTask }) => {
//   const onFormSubmit = (value, { resetForm }) => {
//     onAddTask(value);
//     resetForm();
//   };
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onFormSubmit}
//       validationSchema={validationSchema}
//     >
//       <FormBlock autoComplete="off">
//         <Label htmlFor="name">
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <FormError name="name" />
//         </Label>
//         <Label htmlFor="number">
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <FormError name="number" />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </FormBlock>
//     </Formik>
//   );
// };

// ContactForm.propTypes = {
//   onAddTask: PropTypes.func,
// };
