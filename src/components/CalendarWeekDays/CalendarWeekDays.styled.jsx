import styled from 'styled-components';

export const WeekDaysWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 14px;
  margin-bottom: 15px;
`;

export const WeekDay = styled.p`
  color: ${p => (p.isWeekendDay ? '#3e85f3' : '#343434')};
`;
