import { Container } from 'components/Container';
import React from 'react';
import { FooterDiv, Row } from './Footer.styled';

export const Footer = () => {
  return (
    <Container>
      <footer>
        <FooterDiv>
          <Row>
            <a href="#">
              <i>facebook</i>
            </a>
            <a href="#">
              <i>instagram</i>
            </a>
            <a href="#">
              <i>youtube</i>
            </a>
            <a href="#">
              <i>twitter</i>
            </a>
          </Row>

          <Row>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
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
