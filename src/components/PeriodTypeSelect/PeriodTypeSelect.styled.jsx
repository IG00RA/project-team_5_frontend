import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const BtnMonth = styled(NavLink)`
  padding: 8px 16px;
  width: 76px;
  height: 34px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: calc(18 / 14);
  border-radius: 8px 0px 0px 8px;
  border: 1px solid rgba(62, 133, 243, 0.2);
  background-color: rgba(202, 232, 255, 1);
  color: #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    width: 82px;
    height: 34px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const BtnDay = styled(NavLink)`
  padding: 8px 25px;
  width: 76px;
  height: 34px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: calc(18 / 14);
  border-radius: 0px 8px 8px 0px;
  border: 1px solid rgba(62, 133, 243, 0.2);
  background-color: rgba(202, 232, 255, 1);
  color: #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 8px 26px;
    width: 82px;
    height: 34px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

// Ховери по кнопках
