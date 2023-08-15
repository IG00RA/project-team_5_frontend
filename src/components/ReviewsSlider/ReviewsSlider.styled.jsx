import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 64px;
  /* width: 335px; */
  background-color: var(--white);

  @media screen and (min-width: 375px) {
    /* width: 516px; */
    margin-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    /* width: 1184px; */
    margin-bottom: 118px;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: var(--blue);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 50px;
  }
`