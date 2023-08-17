import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const FeedBackTitle = styled.p`
  margin-bottom: 8px;
`;
export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FeedBackForm = styled.form``;
export const FeedBackArea = styled.textarea``;
export const FeedBackModalStyles = createGlobalStyle`
.ReactModal__Overlay {
  opacity: 0;
  transition: all 300ms ease-in-out;
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
height: 400px;
position: relative;
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.80);
box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  background-color: #fff;
  transform: translate(0px, -100%);
  transition: all 300ms ease-in-out;
  opacity: 0;
}

.ReactModal__Content--after-open {
  transform: translate(0px, 0px);
  opacity: 1;
}

.ReactModal__Content--before-close {
  transform: translate(0px, -100%);
  opacity: 0;
}
`;
