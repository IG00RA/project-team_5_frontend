import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 14px 18px 18px 14px;

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.calendarPage.border};
  background-color: ${props =>
    props.theme.colors.calendarPage.day.taskLabelText};
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  color: ${props => props.theme.colors.calendarPage.day.taskCardTitle};
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 32px;
  border: 1.8px solid
    ${props => props.theme.colors.calendarPage.day.addTaskBtnBorder};
`;

export const TextWrapper = styled.div`
  padding: 4px 12px 4px 12px;

  border-radius: 4px;

  background-color: ${props => {
    switch (props.$priority) {
      case 'high':
        return props.theme.colors.calendarPage.month.hightTaskText;
      case 'medium':
        return props.theme.colors.calendarPage.month.mediumTaskText;
      case 'low':
        return props.theme.colors.calendarPage.month.lowTaskText;
      default:
        return;
    }
  }};
`;

export const Text = styled.p`
  text-transform: capitalize;
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;

  color: ${props => props.theme.colors.calendarPage.day.taskLabelText};
`;
