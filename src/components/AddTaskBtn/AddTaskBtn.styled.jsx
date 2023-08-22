import { styled } from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding-top: 16px;
  padding-bottom: 16px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: ${props => props.theme.colors.calendarPage.day.addTaskBtnText};
  border-radius: 8px;
  border: 1px dashed
    ${props => props.theme.colors.calendarPage.day.addTaskBtnBorder};
  background-color: ${props =>
    props.theme.colors.calendarPage.day.addTaskBtnBg};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px 0px ${props => props.theme.colors.button.shadow};
    background-color: ${props =>
      props.theme.colors.calendarPage.periodTogglerActiveBg};
  }
`;

export const Icon = styled.svg`
  display: inline-flex;
  stroke: currentColor;
  height: 24px;
  width: 24px;
  fill: transparent;
`;
