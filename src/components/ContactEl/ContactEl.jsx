import React from 'react';
import PropTypes from 'prop-types';
import {DeleteBtn} from '../ContactEl/ContactEl.styled'
import {ContactItem} from '../ContactEl/ContactEl.styled'

const ContactEl = ({contacts, onDeleteContact}) => {
 
    return (
      <>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {' '}
            {name}: {number}
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteBtn>
          </ContactItem>
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
