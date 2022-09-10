import { changeFilterInput } from './actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

export const filterReducer = createReducer('', {
  [changeFilterInput]: (state, action) => action.payload,
});

export const contactsReducer = createReducer([], {
  [getContacts.fulfilled]: (state, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

export const errorReducer = createReducer(null, {
  [getContacts.rejected]: (state, action) => action.payload,
  [addContact.rejected]: (state, action) => action.payload,
});

export const loadingReducer = createReducer(false, {
  [getContacts.pending]: (state, action) => true,
  [addContact.pending]: (state, action) => true,
  [getContacts.fulfilled]: (state, action) => false,
  [addContact.fulfilled]: (state, action) => false,
  [getContacts.rejected]: (state, action) => false,
  [addContact.rejected]: (state, action) => false,
});

export const rootReducer = {
  contacts: combineReducers({
    isLoading: loadingReducer,
    items: contactsReducer,
    filter: filterReducer,
    error: errorReducer,
  }),
};
