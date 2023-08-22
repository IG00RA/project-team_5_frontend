import { styled } from 'styled-components';

export const Period = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-transform: uppercase;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
