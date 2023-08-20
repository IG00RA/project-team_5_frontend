import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 900px;

  @media (min-width: ${p => p.theme.media.m}) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 24px 20px 40px;

  @media (min-width: ${p => p.theme.media.m}) {
    padding: 24px 32px 38px;
  }

  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px 32px 32px;
  }
`;
