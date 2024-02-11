import styled from 'styled-components';

export const Body = styled.div`
  min-height: 620px;
  margin: 20px 0;
`;

export const Header = styled.header`
  margin: 40px 0;
`;

export const Section = styled.section`
  margin: 30px auto;
  & h2 {
    margin-bottom: 30px;
  }
`;

export const WhyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
