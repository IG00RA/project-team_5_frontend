import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1px;
  background-color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  min-width: 270px;
  height: 380px;

  @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 470px;
  }
  @media screen and (min-width: 768px) {
    min-width: 704px;
    min-height: 720px;
  }
  @media screen and (min-width: 1440px) {
    width: 1067px;
    min-height: 625px;
  }
`;

export const CellWrapper = styled(Link)`
  background-color: #fff;
  min-width: 30px;
  min-height: 40px;

<<<<<<< HEAD
  overflow: hidden;
=======
  /* overflow: hidden; */
>>>>>>> dev
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 375px) {
    min-width: 46px;
    min-height: 94px;
  }
  @media screen and (min-width: 768px) {
    min-width: 100px;
    min-height: 144px;
  }
  @media screen and (min-width: 1440px) {
    width: 152px;
    min-height: 125px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
<<<<<<< HEAD
  margin-top: 5px;
  margin-right: 4px;
  margin-bottom: 18px;
=======
  margin-top: 4px;
  margin-right: 2px;
  margin-bottom: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 8px;
    margin-right: 4px;
    margin-bottom: 18px;
  }
>>>>>>> dev

  @media screen and (min-width: 768px) {
    margin-top: 14px;
    margin-right: 14px;
  }
`;

export const DayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

<<<<<<< HEAD
  height: 22px;
  width: 16px;
  /* padding: 4px 6px; */
  margin-right: 4px;
=======
  height: ${p => (p.$isNotCurrentDay ? '22px' : '0')};
  width: ${p => (p.$isNotCurrentDay ? '20px' : '0')};
>>>>>>> dev

  font-size: 12px;
  font-weight: 700;
  line-height: calc(14 / 12);

  color: ${p => (p.$isSelectedMonth ? '#343434' : 'transparent')};

  @media screen and (min-width: 768px) {
<<<<<<< HEAD
    height: 26px;
    width: 27px;
    /* padding: 4px 8px; */
    margin: 2px;
    font-size: 16px;
    line-height: calc(18 / 16);
=======
    height: ${p => (p.$isNotCurrentDay ? '26px' : '0')};
    width: ${p => (p.$isNotCurrentDay ? '27px' : '0')};

    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 22px;
  width: 20px;
  padding: 4px 6px;
  border-radius: 6px;

  background-color: #3e85f3;
  color: #fff;

  @media screen and (min-width: 768px) {
    height: 26px;
    width: 27px;
    padding: 4px 8px;
    border-radius: 8px;
>>>>>>> dev
  }
`;

export const TasksListWrapper = styled.ul`
  margin: 0;
  text-align: center;
  list-style-position: inside;
  padding-left: 2px;
  padding-right: 2px;

  /* overflow: hidden; */
  /* overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  } */

  @media screen and (min-width: 768px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const TaskItemWrapper = styled.button`
  position: relative;
  margin: 0;
  margin-bottom: 1px;
<<<<<<< HEAD
  padding: 4px 10px;
  width: 100%;
  height: 26px;
=======
  padding: 4px 2px 4px 8px;
  width: 100%;
  height: 22px;
>>>>>>> dev

  text-overflow: ellipsis;
  text-align: left;
  font-size: 10px;
  font-weight: 700;
<<<<<<< HEAD
  line-height: calc(18 / 14);
=======
  line-height: calc(14 / 10);
>>>>>>> dev

  overflow: hidden;
  white-space: nowrap;
  border: none;
  border-radius: 8px;

  background-color: ${p => {
    switch (p.$priority) {
      case 'high':
        return '#FFD2DD';
      case 'medium':
        return '#FCF0D4';
      case 'low':
        return '#CEEEFD';
      default:
        return;
    }
  }};
  color: ${p => {
    switch (p.$priority) {
      case 'high':
        return ' #EA3D65';
      case 'medium':
        return '#F3B249';
      case 'low':
        return '#3E85F3';
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    padding: 4px 4px 4px 10px;
    font-size: 14px;
    line-height: calc(18 / 14);
    height: 26px;
  }
`;

//Паданги обгортки поточного дня завеликі на моб
// Скролл подій у дні
