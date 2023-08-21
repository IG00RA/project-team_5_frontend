import sprite from '../../images/svg-sprite/symbol-defs.svg';
import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';

import {
  PaginatorWrapper,
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
import { parseISO } from 'date-fns';

import moment from 'moment';
import { DatePickerStatisticsInput } from 'components/DatePickerStatisticsInput/DatePickerStatisticsInput';

export default function StatisticPaginator({ selectedDate, setSelectedDate }) {
  const prevHandler = () => {
    setSelectedDate(prev => prev.clone().subtract(1, 'day'));
  };

  const nextHandler = () => {
    setSelectedDate(prev => prev.clone().add(1, 'day'));
  };

  return (
    <Wrapper>
      <PaginatorWrapper>
        <DatePickerComponent
          startDate={parseISO(selectedDate)}
          setStartDate={date => setSelectedDate(moment(date))}
          customInput={<DatePickerStatisticsInput />}
        />

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
