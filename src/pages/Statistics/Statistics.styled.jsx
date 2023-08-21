import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 684px;
  border-radius: 16px;
  background: ${props => props.theme.colors.statisticsPage.mainBg};
  padding: 28px 14px 135px 14px;
  @media (min-width: ${p => p.theme.media.m}) {
    height: 854px;
    padding-top: 132px;
    padding-bottom: 224px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    min-height: 752px;
    padding: 134px 114px 104px 113px;
  }
`;

export const ChartWrapper = styled.div`
  min-height: 413px;
  border: 0.8px solid
    ${props => props.theme.colors.statisticsPage.statisticsBorder};
  border-radius: 29px;
  margin: 0 auto;
  padding: 14px;
  @media (min-width: ${p => p.theme.media.m}) {
    min-height: 424px;
    padding: 32px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px;
    min-height: 440px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.statisticsPage.mainText};
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(21 / 14);
  @media (min-width: ${p => p.theme.media.m}) {
    margin-bottom: 24px;
  }
`;
