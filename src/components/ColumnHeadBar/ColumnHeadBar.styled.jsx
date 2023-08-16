import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.20;

  color: #111;
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  width: 24px;

  border-radius: 50%;
  border: 2px solid black;

  stroke: #111;
  fill: transparent;
`;