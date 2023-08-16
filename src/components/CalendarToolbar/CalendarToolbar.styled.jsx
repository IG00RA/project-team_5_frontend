import styled from 'styled-components';

export const CalendarToolBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1067px) {
    min-width: 1067px;
  }
`;
