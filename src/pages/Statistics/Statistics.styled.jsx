import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  max-width: 1087px;
  height: 752px;
  border-radius: 16px;
  background: #fff;
`;

export const ChartWrapper = styled.div`
  padding: 40 14px;
  width: 307px;
  min-height: 413px;
  border: 0.8px solid #e3f3ff;
  border-radius: 29px;
  margin: 0 auto;
  @media (min-width: ${p => p.theme.media.m}) {
    width: 640px;
    min-height: 424px;
    padding: 32px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px;
    width: 860px;
    min-height: 440px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(21 / 14);
  @media (min-width: ${p => p.theme.media.m}) {
    margin-bottom: 24px;
  }
`;
