import { styled } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transperent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 61px;
    height: 61px;
  }
`

export const Icon = styled.svg`
  stroke: black;
  height: 100%;
  width: 100%;
  fill: transperent;

  &:hover,
  &:focus {
    stroke: blue;
  }
`