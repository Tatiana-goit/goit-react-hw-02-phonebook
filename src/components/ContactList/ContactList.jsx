import PropTypes from "prop-types";
import s from './ContactList.module.css'

function ContactList({ contacts,onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.info}>
            <span className={s.name}> {name}</span> 
            <span className={s.number}> {number}</span> 
          </div>
          
          <button className={s.button}
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
