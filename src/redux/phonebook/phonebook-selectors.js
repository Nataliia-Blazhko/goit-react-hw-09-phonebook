import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.phonebook.loading;

export const getFilter = state => state.phonebook.filter;

export const getContacts = state => state.phonebook.contacts;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
