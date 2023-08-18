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
  stroke: black;
  height: 24px;
  width: 24px;
`;

export const FeedBackModalStyles = createGlobalStyle`
.ReactModal__Overlay {
  opacity: 0;
  transition: all 100ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}

.ReactModal__Content {
  padding: 32px;
  width: 468px;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.80);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  background-color: #fff;
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
  transition: transform 500ms ease, opacity 300ms ease; 
  opacity: 0;
}

.ReactModal__Content--after-open {
  transform: perspective(600px) translate(0px, 0px) rotateX(0);
  opacity: 1;
}

.ReactModal__Content--before-close {
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
  opacity: 0;
}
`;
