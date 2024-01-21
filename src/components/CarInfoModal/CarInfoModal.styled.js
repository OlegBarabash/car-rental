import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const ModalBackdrop = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${baseTheme.colors.gray};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 280px;

  padding: 32px 24px;
  margin-top: 160px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  background: ${baseTheme.colors.white};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 541px;
    height: 752px;
    padding: 40px 40px;
  }
`;

export const CarPic = styled.img`
  width: 460px;
  height: 248px;
  margin-bottom: 14px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;

  & svg {
    width: 26px;
    height: 26px;
  }

  & use {
    x: 2px;
    y: -2px;
    fill: ${baseTheme.colors.black};
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  text-align: left;
`;

export const NameDiv = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;

  color: ${baseTheme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  & h3 span {
    color: ${baseTheme.colors.blue};
  }
`;

export const DescriptionInfo = styled.p`
  color: ${baseTheme.colors.gray};
  font-size: 12px;
  line-height: 1.5;
  & svg {
    width: 8px;
    height: 16px;
    margin-bottom: 4px;
    vertical-align: middle;
  }

  & use {
    stroke: rgba(18, 20, 23, 0.1);
  }
`;

export const DescriptionText = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
`;

export const AccessoriesHeder = styled.h4`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const CondDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CondSpan = styled.span`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  & span {
    color: ${baseTheme.colors.blue};
    font-weight: 600;
  }
`;

export const RentalBtn = styled.a`
  width: 178px;
  height: 44px;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  color: ${baseTheme.colors.white};
  background: ${baseTheme.colors.blue};
`;
