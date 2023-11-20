import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(20)} ${p => p.theme.spacing(4)};
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  padding: ${p => p.theme.spacing(10)};
`;
