import axios from 'axios';

axios.defaults.baseURL = 'https://631b4036dc236c0b1ef17f57.mockapi.io/';

export async function getContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post('contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
