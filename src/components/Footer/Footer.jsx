import { Container } from 'components/Container';
import React from 'react';
import { FooterDiv, Row } from './Footer.styled';
import { HeaderLink } from 'components/Header/Header.styled';

export const Footer = () => {
  return (
    <Container>
      <footer>
        <FooterDiv>
          <Row>
            <a href="google.com">
              <i>facebook</i>
            </a>
            <a href="google.com">
              <i>instagram</i>
            </a>
            <a href="google.com">
              <i>youtube</i>
            </a>
            <a href="google.com">
              <i>twitter</i>
            </a>
          </Row>

          <Row>
            <ul>
              <li>
                <HeaderLink to={'/'}>Contact us</HeaderLink>
                {/* <a href="qwerty">Contact us</a> */}
              </li>
              <li>
                <a href="qwerty">Our Services</a>
              </li>
              <li>
                <a href="qwerty">Privacy Policy</a>
              </li>
              <li>
                <a href="qwerty">Terms & Conditions</a>
              </li>
              <li>
                <a href="qwerty">Career</a>
              </li>
            </ul>
          </Row>

          <Row>
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed
            By: Mahesh
          </Row>
        </FooterDiv>
      </footer>
    </Container>
  );
};
