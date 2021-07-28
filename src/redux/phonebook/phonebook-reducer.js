import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './phonebook-actions';

export const contactsReducer = createReducer([], {
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.getContactSuccess]: (_, { payload }) => payload,
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  [actions.handleFilter]: (_, { payload }) => payload,
});

export const loadingReducer = createReducer(false, {
  [actions.getContactRequest]: () => true,
  [actions.getContactSuccess]: () => false,
  [actions.getContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
export default phonebookReducer;
