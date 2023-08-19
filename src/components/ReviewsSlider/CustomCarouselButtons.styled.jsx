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

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`

export const Icon = styled.svg`
  stroke: ${ p => p.theme.colors.header.titleText};
  height: 100%;
  width: 100%;
  fill: transperent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &:hover,
  &:focus {
    stroke: ${ p => p.theme.colors.homePage.titleText};
  }
`