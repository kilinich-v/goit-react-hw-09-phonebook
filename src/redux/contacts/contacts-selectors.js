import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizeFilter) ||
        number.includes(contacts.filter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getContacts,
  getLoading,
  getVisibleContacts,
};
