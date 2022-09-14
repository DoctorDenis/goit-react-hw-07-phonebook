import * as contactsApi from '../services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/get', async () => {
  const contacts = await contactsApi.getContacts();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/post', async contact => {
  const contacts = await contactsApi.getContacts();
  if (contacts.find(cont => cont.name === contact.name)) {
    return Promise.reject(
      new Error(`Sorry! Contact ${contact.name} already exists. Try other name`)
    );
  }
  const addedContact = await contactsApi.postContact(contact);
  console.log(addedContact);
  return addedContact;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const deletedContact = await contactsApi.deleteContact(id);
  console.log(deletedContact);
  return deletedContact;
});
