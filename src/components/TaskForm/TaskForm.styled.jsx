import { styled } from 'styled-components';

export const CloseBtn = styled.button`
  position: relative;
  top: 42px;
  left: 268px;

  color: ${props => props.theme.colors.modal.task.closeBtn};
  transform: rotate(-90deg);

  transition:
    color 250ms linear,
    transform 250ms linear;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.button.hoverBg};
    transform: rotate(90deg);
  }

  @media (min-width: 768px) {
    top: 42px;
    left: 356px;
  }
`;

export const IconClose = styled.svg`
  height: 24px;
  width: 24px;

  stroke: currentColor;
  fill: transparent;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 40px 18px;
  width: 303px;

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.modal.task.taskFormBorder};
  background-color: ${props => props.theme.colors.modal.task.taskBG};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media (min-width: 768px) {
    gap: 28px;

    padding: 40px 28px;
    width: 396px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const InputTimeWrapper = styled.div`
  display: flex;
  gap: 13px;

  @media (min-width: 375px) {
    gap: 15px;
  }

  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;

  color: rgba(52, 52, 52, 0.8);
`;

export const InputText = styled.textarea`
  padding: 14px 18px;
  resize: none;
  width: 100%;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: ${props => props.theme.colors.modal.task.taskInputText};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.modal.task.taskInput};
  border: 1px solid ${props => props.theme.colors.modal.task.popUpBorder};
  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 2px 1px 10px 0px rgba(136, 165, 191, 0.48);
  }

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;

    color: ${props => props.theme.colors.modal.task.taskInputText};
  }
`;

export const InputTime = styled.input`
  padding: 14px 18px;
  min-width: 100px;
  height: 46px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: ${props => props.theme.colors.modal.task.taskInputText};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.modal.task.taskInput};
  border: 1px solid ${props => props.theme.colors.modal.task.popUpBorder};

  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 2px 1px 10px 0px rgba(136, 165, 191, 0.48);
  }

  @media (min-width: 375px) {
    min-width: 126px;
  }

  @media (min-width: 768px) {
    min-width: 163px;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RadioWrapper = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  font-family: Inter;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: ${props => props.theme.colors.modal.task.taskInputText};
  cursor: pointer;
`;

export const WrapperBtn = styled.div`
  display: flex;
  gap: 14px;
`;

export const FormSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 178px;
  height: 48px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${props =>
    props.disabled
      ? props.theme.colors.modal.task.cancelBtnText
      : props.theme.colors.modal.task.saveBtnText};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.modal.task.cancelBtnBg
      : props.theme.colors.calendarPage.todayBg};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    box-shadow: 4px 2px 16px 0px rgba(19, 108, 187, 0.48);
  }
  &:disabled {
    cursor: not-allowed;
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
`;

export const IconInBtn = styled.svg`
  height: 18px;
  width: 18px;

  stroke: ${props => props.theme.colors.modal.task.saveBtnText};
  fill: transparent;
`;

export const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 144px;
  height: 48px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border-radius: 8px;
  color: ${props => props.theme.colors.modal.task.cancelBtnText};
  background-color: ${props => props.theme.colors.modal.task.cancelBtnBg};

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const RadioNone = styled.input`
  display: none;
`;

export const RadioCustom = styled.span`
  display: block;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${p => {
    switch (p.color) {
      case 'low':
        return p.theme.colors.calendarPage.month.lowTaskText;
      case 'medium':
        return p.theme.colors.calendarPage.month.mediumTaskText;
      case 'high':
        return p.theme.colors.calendarPage.month.hightTaskText;
      default:
        return;
    }
  }};

  cursor: pointer;
`;

export const RadioCustomCheck = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  ${RadioNone}:checked + & {
    width: 14px;
    height: 14px;

    border-radius: 50%;
    border: 1px solid;
    background-color: transparent;
    border-color: ${p => {
      switch (p.color) {
        case 'low':
          return 'rgba(114, 194, 248, 0.50);';
        case 'medium':
          return 'rgba(243, 178, 73, 0.50);';
        case 'high':
          return 'rgba(234, 61, 101, 0.50);';
        default:
          return;
      }
    }};
  }
`;

export const Error = styled.div`
  font-family: Inter;
  text-align: center;
  font-size: 12px;
  line-height: 1.16;

  color: #ea3d65;
`;
