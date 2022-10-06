import React from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';

const ContactEl = ({contacts, onDeleteContact}) => {
 
    return (
      <>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {' '}
            {name}: {number}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </>
    );
  }

  ContactEl.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactEl;
