import styled from 'styled-components';

export const WeekDaysWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  text-align: center;
  padding: 8px;
  margin-bottom: 14px;

  @media screen and (min-width: 375px) {
    padding: 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 14px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1067px) {
    min-width: 1067px;
  }
`;

export const WeekDay = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  text-transform: uppercase;
  color: ${p => (p.$isWeekendDay ? '#3e85f3' : '#343434')};
`;

// НЕ центруються дні тижня у колонках - гріди
