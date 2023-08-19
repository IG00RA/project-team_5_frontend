import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
  ButtonsWrap,
} from './StatisticPaginator.styled';

export default function StyledPaginator({
  selectedDate,
  onDateChange,
  typeOfPeriod,
}) {
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
    <PaginatorWrapper>
      <Period>{formattedPeriod}</Period>
      <ButtonsWrap>
        <BtnPrev onClick={prevHandler}>&lt;</BtnPrev>
        <BtnNext onClick={nextHandler}>&gt;</BtnNext>
      </ButtonsWrap>
    </PaginatorWrapper>
  );
}
