import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactsList = ({ contacts, onDeleteContact }) => {
    return <ul className={css.contactsList} >
        {contacts.map(({name,number,id}) => (
            <li className={css.contactItem}
                key={id}>
                <p>{name}</p> <p>{number}</p>
                <button className={css.contactBtn} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
}

ContactsList.protoTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}