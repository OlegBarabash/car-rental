import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${baseTheme.colors.white};
  border-radius: 14px;
  /* box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08); */
`;

export const CarImg = styled.img`
  width: 274px;
  height: 268px;
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

export const HeartBtn = styled.button`
  width: 18px;
  height: 18px;

  background-color: transparent;
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 12px;

  & svg {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    /* transition: all 0.2s ease; */
  }
`;

export const FilledSvg = styled.svg`
  & use {
    fill: ${baseTheme.colors.blue};
  }
`;
export const EmptySvg = styled.svg`
  & use {
    stroke: ${baseTheme.colors.white};
  }
`;

export const NamePriceDiv = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;

  color: #121417;
  font-weight: 500;
  line-height: 1.5;

  & p span {
    color: ${baseTheme.colors.blue};
  }
`;

export const DescriptionText = styled.p`
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

export const LMButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${baseTheme.colors.blue};
  border: none;
  color: white;
`;

export const PaginationDiv = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  & :disabled {
    background: ${baseTheme.colors.light_blue};
    cursor: auto;
  }
`;
