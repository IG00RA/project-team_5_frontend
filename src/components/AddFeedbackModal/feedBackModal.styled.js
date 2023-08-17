import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedBackTitle = styled.p`
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: calc(14 / 12);
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
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  stroke: black;
  height: 24px;
  width: 24px;
`;
export const FeedBackForm = styled.form`
  width: 100%;
`;
export const FeedBackArea = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: #f6f6f6;
  padding: 14px 18px;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  &::placeholder {color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  }
`;

export const FeedBackFormBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
font-size: 14px;
font-weight: 600;
line-height: calc(18 / 14);
width: 198px;
padding: 15px;
outline: none;
border: none;
border-radius: 8px;
transition: all 300ms;
`

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

.submit-btn {
    background-color: #3E85F3;
    &:hover {
        background-color: #2B78EF;
    }
}
.cancel-btn {
    background-color: #E5EDFA;
    color: #343434;
    &:hover {
        background-color: #CAE8FF;
    }
}
`;
