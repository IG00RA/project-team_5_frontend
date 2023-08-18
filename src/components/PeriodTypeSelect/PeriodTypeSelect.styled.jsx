import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const PeriodTypeBtn = styled(NavLink)`
  padding: ${p => (p.$isMonth ? '8px 16px' : '8px 25px')};
  width: 76px;
  height: 34px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: calc(18 / 14);
  border: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: ${p => (p.$isMonth ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
  background-color: ${props => props.theme.colors.calendarPage.periodTogglerBg};
  color: ${props => props.theme.colors.calendarPage.periodTogglerText};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.calendarPage.periodTogglerActiveText};
    background-color: ${props =>
      props.theme.colors.calendarPage.periodTogglerActiveBg};
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.1);
  }

  &.active {
    color: ${p => {
      switch (p.type) {
        case 'month':
          return p.theme.colors.calendarPage.periodTogglerActiveText;
        case 'day':
          return p.theme.colors.calendarPage.periodTogglerActiveText;
        default:
          return;
      }
    }};
    background-color: ${p => {
      switch (p.type) {
        case 'month':
          return p.theme.colors.calendarPage.periodTogglerActiveBg;
        case 'day':
          return p.theme.colors.calendarPage.periodTogglerActiveBg;
        default:
          return;
      }
    }};
  }

  @media screen and (min-width: 768px) {
    padding: ${p => (p.$isMonth ? '8px 16px' : '8px 26px')};
    width: 82px;
    height: 34px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

// ADD DARK & LIGHT THEME
