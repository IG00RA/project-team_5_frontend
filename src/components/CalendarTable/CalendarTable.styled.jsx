import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;
`;

export const CellWrapper = styled(Link)`
  min-width: 156px;
  min-height: 125px;
  background-color: #fff;
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  width: 27px;
  padding-top: 14px;
  padding-right: 14px;
  margin: 2px;

  font-weight: 700;
  line-height: calc(18 / 16);
  text-transform: uppercase;

  color: ${p => (p.$isSelectedMonth ? '#343434' : 'transparent')};
`;

export const TasksListWrapper = styled.ul`
  margin: 0;
  text-align: center;
  list-style-position: inside;
  padding-left: 4px;
`;

export const TaskItemWrapper = styled.button`
  position: relative;
  margin: 0;
  margin-bottom: 1px;
  padding: 4px 10px;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  height: 26px;
  border: none;
  border-radius: 8px;
  background-color: #ceeefd;
  color: #3e85f3;
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 8px;

  background-color: #3e85f3;
  color: #fff;
`;
