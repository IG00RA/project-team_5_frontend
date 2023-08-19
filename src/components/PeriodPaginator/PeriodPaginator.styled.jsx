import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Period = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-transform: uppercase;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: ${props => props.theme.colors.calendarPage.todayBg};
  /* box-shadow: 4px 2px 16px 0px ${props =>
    props.theme.colors.button.shadow}; */
  color: ${props => props.theme.colors.calendarPage.todayText};

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const PaginatorBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 30px;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: ${p => (p.$isPrevBtn ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
  border: 1px solid ${props => props.theme.colors.calendarPage.border};
  background-color: ${props => props.theme.colors.calendarPage.mainBg};
  color: ${props => props.theme.colors.calendarPage.iconFocus};
  color: ${props =>
    props.disabled
      ? props.theme.colors.calendarPage.periodPaginatorDisabled
      : props.theme.colors.calendarPage.iconFocus};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 4px 2px 16px 0px ${props => props.theme.colors.button.shadow};
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;

export const Icon = styled.svg`
  display: inline-block;
  height: 18px;
  width: 18px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
