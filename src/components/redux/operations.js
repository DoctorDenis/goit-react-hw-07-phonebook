import * as contactsApi from '../../services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/get', async () => {
  const contacts = await contactsApi.getContacts();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/post', async contact => {
  const contacts = await contactsApi.postContact(contact);
  return contacts;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const contacts = await contactsApi.deleteContact(id);
  return contacts;
});
