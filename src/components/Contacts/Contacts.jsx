import { Component } from 'react';
import FindContacts from './FindContacts';
import ContactsList from './ContactsList';

export class Contacts extends Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <FindContacts />
        <ContactsList />
      </div>
    );
  }
}

export default Contacts;
