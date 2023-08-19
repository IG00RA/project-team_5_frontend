import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

// этот стилизированный компонент тут пустой не случайно, так нужно, не трогать!
export const Button = styled.button``;
export const Icon = styled.svg`
  height: 16px;
  width: 16px;
  
  stroke: #111;
  fill: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Button}:hover & {
    stroke: #3E85F3;
  }
`;

export const WrapperPopUp = styled.div`
  display: none;
  padding: 20px 24px;

  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);

  &:hover {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    position: absolute;
  }
`;

export const CategoryBtn = styled.button`
  &:hover + ${WrapperPopUp} {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    position: absolute;
  }
`;

export const PopUpBtn = styled.button`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1,28;

  color: #343434;
`;