import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledButton } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export function ContactItem({ contact: { id, name, phone } }) {
  const dispatch = useDispatch();

  const deleteButtonClickHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <span>{name}: </span>
      <span>{phone}</span>
      <StyledButton id={id} type="button" onClick={deleteButtonClickHandler}>
        Delete
      </StyledButton>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
