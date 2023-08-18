import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  margin: 0 auto;
<<<<<<< HEAD
  max-width: 1600px;
  background-color: ${props => props.theme.colors.mainLayout.bg};
=======
  max-width: 375px;
  min-height: 844px;
  @media (min-width: ${p => p.theme.media.m}) {
    display: flex;
    max-width: 768px;
    min-height: 1024px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    min-height: 900px;
    margin: 0 auto;
    max-width: 1600px;
  }
>>>>>>> dev
`;
export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 24px 20px 40px;
  /* height: 100vh; */
  @media (min-width: ${p => p.theme.media.m}) {
    padding: 24px 32px 38px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px 32px 32px;
    /* margin-left: 289px; */
    /* padding-left: auto;
    padding-right: auto; */
    /* width: 1087px; */
  }
`;
