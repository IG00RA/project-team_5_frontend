import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 375px;
  min-height: 844px;
  @media (min-width: ${p => p.theme.media.m}) {
    display: flex;
    max-width: 768px;
    min-height: 1024px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
  }
`;
export const Wrapper = styled.div`
  display: block;
  padding: 24px 20px 40px;
  @media (min-width: ${p => p.theme.media.m}) {
    padding: 24px 32px 38px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px 32px 32px;
  }
`;
