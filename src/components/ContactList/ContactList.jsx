import { BsFillPersonDashFill } from 'react-icons/bs';
import {
  ContactsList,
  ContactsListItem,
  ItemWrap,
  ContactsWrap,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem key={id}>
            <ItemWrap>
              <ContactsWrap>{name}:</ContactsWrap>
              <ContactsWrap>{number}</ContactsWrap>
            </ItemWrap>
            <DeleteBtn type="button" onClick={() => onDelete(id)}>
              Delete
              <BsFillPersonDashFill size="16" />
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </ContactsList>
  );
};
