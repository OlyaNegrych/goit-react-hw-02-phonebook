// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Label, Input, AddBtn } from '../ContactForm/ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onFormSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onFormSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Label>
          Name
          <br />
          <Input
            type="text"
            name="name"
            // value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={this.handleChange}
          />
        </Label>
        <br />
        <Label>
          Number
          <br />
          <Input
            type="tel"
            name="number"
            // value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={this.handleChange}
          />
        </Label>
        <br />
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </Formik>
  );
};

 ContactForm.propTypes = {
   onFormSubmit: PropTypes.func.isRequired,
 };

export default ContactForm;
