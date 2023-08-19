import { BarChart, Legend } from 'recharts';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 860px;
  min-height: 440px;
  border: 0.8px solid #e3f3ff;
  border-radius: 29px;
  margin: 0 auto;
`;

export const Text = styled.p`
  padding: 40px 14px 10px;

  @media (min-width: ${p => p.theme.media.m}) {
    padding: 32px 24px 22px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 40px 24px 30px;
  }
`;

export const StyledLegend = styled(Legend)`
  position: fixed;
`;

export const StyledBarChart = styled(BarChart)`
  .recharts-yAxis {
    color: #343434;
    text-align: right;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  /* контейнер загального чарту */
  .recharts-wrapper {
    width: 500px;
    height: 800px;
  }

  /* графік і дані в контейнері чарту */
  .recharts-surface {
  }

  /* вісь */
  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    stroke: transparent;
  }

  .recharts-layer .recharts-cartesian-axis .recharts-xAxis.xAxis {
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(21 / 14);
  }
  / .recharts-text {
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(21 / 14);
  }

  /* .recharts-cartesian-axis-tick-value {
    padding: 50px, 50px;
  } */
`;
