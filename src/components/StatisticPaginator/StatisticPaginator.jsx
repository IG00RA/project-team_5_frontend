import sprite from '../../images/svg-sprite/symbol-defs.svg';
import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';
import { useState } from 'react';
import {
  Icon,
  PaginatorBtn,
  PaginatorWrapper,
} from './StatisticPaginator.styled';

const StatisticPaginator = ({ selectedDate, onDateChange, typeOfPeriod }) => {
  const [startDate, setStartDate] = useState(new Date());

  // const formattedPeriod =
  //   typeOfPeriod === 'month'
  //     ? selectedDate.format('MMMM YYYY')
  //     : selectedDate.format('D MMMM YYYY');
  const prevHandler = () => {
    if (typeOfPeriod === 'month') {
      onDateChange(prev => prev.clone().subtract(1, 'month'));
    } else if (typeOfPeriod === 'day') {
      onDateChange(prev => prev.clone().subtract(1, 'day'));
    }
  };
  const nextHandler = () => {
    if (typeOfPeriod === 'month') {
      onDateChange(prev => prev.clone().add(1, 'month'));
    } else if (typeOfPeriod === 'day') {
      onDateChange(prev => prev.clone().add(1, 'day'));
    }
  };

  return (
    <PaginatorWrapper>
      <DatePickerComponent startDate={startDate} setStartDate={setStartDate} />
      <div>
        <PaginatorBtn $isPrevBtn onClick={prevHandler}>
          <Icon>
            <use href={sprite + '#icon-chevron-left'}></use>
          </Icon>
        </PaginatorBtn>
        <PaginatorBtn onClick={nextHandler}>
          <Icon>
            <use href={sprite + '#icon-chevron-right'}></use>
          </Icon>
        </PaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
};

export default StatisticPaginator;
