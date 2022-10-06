import ContactEl from 'components/ContactEl/ContactEl';
import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {

    return (
      <ul>
            <ContactEl contacts={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    );
  }

   ContactList.propTypes = {
     contacts: PropTypes.array.isRequired,
     onDeleteContact: PropTypes.func.isRequired,
   };

export default ContactList;
