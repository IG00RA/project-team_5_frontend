import { styled } from "styled-components";

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

color: #111;
border-radius: 8px;
border: 1px dashed #3E85F3;
background: #E3F3FF;
`;

export const Icon = styled.svg`
  display: inline-flex;
  stroke: #111;
  height: 24px;
  width: 24px;
  fill: transparent;
`;