import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const MainHeader = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 500;
`;
