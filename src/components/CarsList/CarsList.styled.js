import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  background-color: #fff;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const CarImg = styled.img`
  width: 274px;
  height: 268px;
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

export const LMButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: white;
`;
