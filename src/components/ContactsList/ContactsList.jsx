import PropTypes from 'prop-types';
import {
  Contact,
  ListOfContacts,
  ContactDetails,
  DeleteBtn,
} from './Contacts.List.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactDetails>{name}</ContactDetails>
          <ContactDetails>{number}</ContactDetails>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </Contact>
      ))}
    </ListOfContacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
