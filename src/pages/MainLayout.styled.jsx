import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 120vh;
  display: flex;
  margin: 0 auto;
  max-width: 1600px;
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  height: 100vh;
  @media (min-width: 768px) {
    padding: 32px;
    
  }
  @media (min-width: 1440px) {
    margin-left: 289px;
    padding-left: auto;
    padding-right: auto;
    width:1087px
  }
`;