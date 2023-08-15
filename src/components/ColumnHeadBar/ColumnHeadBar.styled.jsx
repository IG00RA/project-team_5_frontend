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

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid black;
  color: #111;
`;