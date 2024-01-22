import { Container } from 'components/Container';
import React from 'react';
import { HeaderLink, HeaderWrap } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <HeaderLink to={'/'}>Home</HeaderLink>
        <HeaderLink to={'/catalog'}>Cars</HeaderLink>
        <HeaderLink to={'/favorites'}>Selected</HeaderLink>
      </HeaderWrap>
    </Container>
  );
};
