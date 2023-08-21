import { styled } from 'styled-components';

export const Period = styled.div`
  /* text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-transform: uppercase;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff; */

  /* @media screen and (min-width: 768px) { */
  /* padding: 8px 12px;
    font-size: 16px;
    line-height: calc(18 / 16); */
  /* } */

  width: 100%;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.accountPage.border};
  background-color: ${props => props.theme.colors.accountPage.mainBg};

  color: ${props => props.theme.colors.accountPage.mainText};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
