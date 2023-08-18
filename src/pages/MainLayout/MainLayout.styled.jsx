import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 900px;
  display: flex;
  margin: 0 auto;
  max-width: 1600px;
  background-color: ${props => props.theme.colors.mainLayout.bg};
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  /* height: 100vh; */
  @media (min-width: 768px) {
    padding: 32px;
  }
  @media (min-width: 1440px) {
    padding-top: 40px;
    /* margin-left: 289px; */
    /* padding-left: auto;
    padding-right: auto; */
    /* width: 1087px; */
  }
`;
