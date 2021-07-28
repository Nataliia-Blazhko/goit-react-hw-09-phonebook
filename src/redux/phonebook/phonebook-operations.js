import {
  getContactsQuery,
  addContactQuery,
  deleteContactQuery,
} from '../../services/contactsServices';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  addContactQuery(contact)
    .then(data => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError()));
};

export const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  getContactsQuery()
    .then(data => {
      dispatch(getContactSuccess(data));
    })
    .catch(error => dispatch(getContactError()));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  deleteContactQuery(id)
    .then(data => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => dispatch(deleteContactError()));
};
