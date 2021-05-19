import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { getContacts, deleteContact } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

export class ContactsList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}</span>
              <span>{number}</span>
              <button className={styles.button} onClick={() => onDelete(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
