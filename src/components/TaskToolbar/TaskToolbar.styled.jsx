import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.svg`
  height: 16px;
  width: 16px;
  
  stroke: #111;
  fill: transparent;
`;

export const WrapperPopUp = styled.div`
  display: none;

  width: 200px;
  height: 100px;

  background-color: #fff;

  &:hover {
    display: block;
    position: absolute;
  }
`;

export const CategoryBtn = styled.button`
  &:hover + ${WrapperPopUp} {
    display: block;
    position: absolute;
  }
`;

export const PopUpBtn = styled.button`
  border: 1px solid black;
`;