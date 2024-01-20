import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
`;
