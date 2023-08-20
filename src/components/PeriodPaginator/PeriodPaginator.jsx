import {
  Icon,
  PaginatorBtn,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { useState } from 'react';
import moment from 'moment';
import { updateDate } from 'redux/date/slice';

export default function PeriodPaginator({ changePeriod }) {
  
  const date = useSelector(selectDate);
  const [momentDate, setMomentDate] = useState(moment(date));

  const dispatch = useDispatch();

  const checkDaysOfWeek = momentDate.format('ddd');

  const prevMonthHandler = () => {
    if (changePeriod === 'month') {
      setMomentDate(prev => prev.clone().subtract(1, 'month'));
      dispatch(updateDate(momentDate.format('YYYY-MM-DD')));
      return;
    }

    if (changePeriod === 'day') {
      setMomentDate(prev => prev.clone().subtract(1, 'day'));
      dispatch(updateDate(momentDate.format('YYYY-MM-DD')));
      return;
    }
  };

  const nextMonthHandler = () => {
    if (changePeriod === 'month') {
      setMomentDate(prev => prev.clone().add(1, 'month'));
      dispatch(updateDate(momentDate.format('YYYY-MM-DD')));
      return;
    }

    if (changePeriod === 'day') {
      setMomentDate(prev => prev.clone().add(1, 'day'));
      dispatch(updateDate(momentDate.format('YYYY-MM-DD')));
      return;
    }
  };

  return (
    <PaginatorWrapper>
      <Period>
        {changePeriod === 'day'
          ? momentDate.format('DD MMM YYYY')
          : momentDate.format('MMMM YYYY')}
      </Period>
      <div>
        <PaginatorBtn
          $isPrevBtn
          disabled={changePeriod === 'day' && checkDaysOfWeek === 'Mon'}
          onClick={prevMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-left'}></use>
          </Icon>
        </PaginatorBtn>
        <PaginatorBtn
          disabled={changePeriod === 'day' && checkDaysOfWeek === 'Sun'}
          onClick={nextMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-right'}></use>
          </Icon>
        </PaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
};