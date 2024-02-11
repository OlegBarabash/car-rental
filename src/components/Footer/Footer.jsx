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
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i>facebook</i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i>instagram</i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i>youtube</i>
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noreferrer">
              <i>X</i>
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
