import styled from 'styled-components';

export const SearchLabel = styled.label`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  margin: 0 auto ${p => p.theme.spacing(5)};
`;

export const SearchWrap = styled.span`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  align-items: center;
`;

export const SearchInput = styled.input`
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid ${p => p.theme.colors.blue};
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
`;
