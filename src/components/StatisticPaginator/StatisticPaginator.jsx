import sprite from '../../images/svg-sprite/symbol-defs.svg';
// import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';
// import { useState } from 'react';

import {
  PaginatorWrapper,
  Period,
  ButtonsWrap,
  Wrapper,
  CategoryText,
  PaginatorBtn,
} from './StatisticPaginator.styled';
import {
  List,
  ListItem,
  ColoredSquare,
  Icon,
} from './StatisticPaginator.styled';

function StatisticPaginator({ selectedDate, onDateChange, typeOfPeriod }) {
  const formattedPeriod =
    typeOfPeriod === 'month'
      ? selectedDate.format('MMMM YYYY')
      : selectedDate.format('D MMMM YYYY');

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
    <Wrapper>
      <PaginatorWrapper>
        {/* <DatePickerComponent startDate={startDate} setStartDate={setStartDate} /> */}
        <Period>{formattedPeriod}</Period>
        <ButtonsWrap>
          <PaginatorBtn onClick={prevHandler} $isPrevBtn>
            <Icon>
              <use href={sprite + '#icon-chevron-left'}></use>
            </Icon>
          </PaginatorBtn>
          <PaginatorBtn onClick={nextHandler}>
            <Icon>
              <use href={sprite + '#icon-chevron-right'}></use>
            </Icon>
          </PaginatorBtn>
        </ButtonsWrap>
      </PaginatorWrapper>
      <List>
        <ListItem>
          <ColoredSquare color="#FFD2DD"></ColoredSquare>
          <CategoryText fontFamily="Inter">By Day</CategoryText>
        </ListItem>
        <ListItem>
          <ColoredSquare color=" #3E85F3;"></ColoredSquare>
          <CategoryText fontFamily="Poppins">By Month</CategoryText>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default StatisticPaginator;

