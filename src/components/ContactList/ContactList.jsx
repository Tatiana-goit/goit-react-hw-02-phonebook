import PropTypes from "prop-types";

function ContactList({ contacts,onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name} {number}
          <button 
          type="button"
          onClick={()=>onDeleteContact(id)}
          > 
          Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string
        )).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
