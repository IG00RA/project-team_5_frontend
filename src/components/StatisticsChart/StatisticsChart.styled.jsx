import { BarChart } from 'recharts';
import styled from 'styled-components';

// export const StyledReferenceLine = styled(ReferenceLine)`
//   .recharts-cartesian-grid-horizontal {
//     margin-left: 100px;
//   }
// `;
export const Wrapper = styled.div`
  width: 860px;
  height: 440px;
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

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    stroke: transparent;
  }

  .recharts-wrapper {
    display: flex;
    gap: 50px;
  }

  .recharts-bar-rectangle {
    width: 27px;
  }

  /* .recharts-cartesian-grid-horizontal line {
    stroke: blue;
    stroke-dasharray: none;
  } */

  .recharts-cartesian-grid {
    border-color: red;
  }

  .recharts-layer .recharts-cartesian-axis .recharts-xAxis.xAxis {
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }

  .recharts-text {
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }

  .recharts-cartesian-axis-tick-value {
    padding: 50px, 50px;
  }
`;
