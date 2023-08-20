import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  stroke: ${props => props.theme.colors.header.titleText};
  height: 24px;
  width: 24px;
`;

export const FeedBackModalStyles = createGlobalStyle`
.ReactModal__Content {
  width: 327px;
  padding: 9px 18px;
  position: relative;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.modal.task.popUpBorder};
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  background-color: ${props => props.theme.colors.modal.task.taskBG};
  @media screen and (min-width: 768px) {
  padding: 32px;
  width: 468px;
  }
}
`;
