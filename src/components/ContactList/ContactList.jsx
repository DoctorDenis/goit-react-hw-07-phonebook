import { useEffect } from 'react';
import { StyledUl } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getContacts());
    // eslint-disable-next-line
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {loading && <h3>Loading ... Please wait</h3>}
      <StyledUl>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </StyledUl>
    </>
  );
}
