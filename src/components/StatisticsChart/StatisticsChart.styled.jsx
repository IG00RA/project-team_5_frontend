import styled from 'styled-components';

// export const Wrapper = styled.div`
//   width: 335px;
//   min-height: 684px;
//   border: 0.8px solid #e3f3ff;
//   border-radius: 29px;
//   margin: 0 auto;
//   @media (min-width: ${p => p.theme.media.m}) {
//     width: 640px;
//     min-height: 424px;
//   }
//   @media (min-width: ${p => p.theme.media.l}) {
//     width: 860px;
//     min-height: 440px;
//   }
// `;

export const Text = styled.p`
  padding: 40px 14px 10px;

  @media (min-width: ${p => p.theme.media.m}) {
    padding: 32px 24px 22px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px 24px 30px;
  }
`;
