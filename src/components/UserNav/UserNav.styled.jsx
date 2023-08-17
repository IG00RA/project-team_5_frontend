import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../images/svg/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../images/svg/nav-calendar.svg';
import { ReactComponent as ChartIcon } from '../../images/svg/nav-chart.svg';

export const UserSVG = styled(UserIcon)``;
export const CalendarSVG = styled(CalendarIcon)``;
export const ChartSVG = styled(ChartIcon)``;

export const UserNavWrap = styled.div`
  box-sizing: border-box;
  font-family: 'Inter';
  font-weight: 600;
  width: 185px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 225px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;
    width: 241px;
  }
`;

export const UserNavTitle = styled.div`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 15px;
  color: #34343480;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 32px;
  }
`;

export const UserNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 12px;
  gap: 8px;
  width: 100%;
  text-decoration: none;
  color: #34343480;
  margin-bottom: 18px;
  &.active {
    color: #3e85f3;
    background-color: #e3f3ff;
    border-radius: 8px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #3e85f3;
    border-radius: 8px;
  }
  font-size: 14px;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 16px;
    height: 56px;
    padding: 18px 20px;
  }
`;
