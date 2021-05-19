import React from 'react';
import AddContact from '../components/AddContact';
import Contacts from '../components/Contacts';

const phonebookView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <div className="container">
        <AddContact />
        <Contacts />
      </div>
    </>
  );
};

export default phonebookView;
