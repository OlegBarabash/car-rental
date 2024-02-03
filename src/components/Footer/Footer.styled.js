import styled from 'styled-components';
import { baseTheme } from 'components/theme';

export const FooterDiv = styled.div`
  /* background: ${baseTheme.colors.dark_blue}; */
  background: #000;
  padding: 30px 0px;
  text-align: center;
`;

export const Row = styled.div`
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: gray;
  font-size: 0.8em;

  & a {
    text-decoration: none;
    color: gray;
    transition: 0.5s;
  }

  & a:hover {
    color: #fff;
  }

  & ul {
    width: 100%;
  }

  & ul li {
    display: inline-block;
    margin: 0px 30px;
  }

  & a i {
    font-size: 2em;
    margin: 0% 1%;
  }
`;

// @media (max-width:720px){
// .footer{
// text-align:left;
// padding:5%;
// }
// .footer .row ul li{
// display:block;
// margin:10px 0px;
// text-align:left;
// }
// .footer .row a i{
// margin:0% 3%;
// }
// }
