import { baseTheme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;

  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${baseTheme.colors.light_blue};
`;

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${baseTheme.colors.black};
  &.active {
    color: ${baseTheme.colors.blue};
  }
  &:hover {
    color: ${baseTheme.colors.dark_blue};
  }
`;
