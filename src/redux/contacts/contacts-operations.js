import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  return axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(err => dispatch(getContactsError(err)));
};

export const addContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactError(err)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err)));
};
