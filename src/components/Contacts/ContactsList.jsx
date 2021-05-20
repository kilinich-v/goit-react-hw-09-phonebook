import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { getContacts, deleteContact } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

import React from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contact}>
            <span>{name}</span>
            <span>{number}</span>
            <button
              className={styles.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
