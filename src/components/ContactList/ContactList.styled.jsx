import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: ${p => p.theme.spacing(8)};
  }
`;

export const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(4)};

  @media (max-width: 460px) {
    flex-direction: column;
    gap: ${p => p.theme.spacing(1)};
  }
`;

export const ContactsWrap = styled.span`
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(30)};
  height: ${p => p.theme.spacing(10)};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  border: none;
  border-radius: ${p => p.theme.radii.md};
  transition: all 300ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.lightblue};
    color: ${p => p.theme.colors.blue};
    font-weight: 700;
    box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  }
`;
