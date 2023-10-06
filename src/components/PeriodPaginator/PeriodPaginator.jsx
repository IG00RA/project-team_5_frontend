import {
  Icon,
  PaginatorBtn,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateDate } from 'redux/date/slice';
import 'moment/min/locales';

export default function PeriodPaginator({
  changePeriod,
  momentDate,
  setMomentDate,
}) {
  const dispatch = useDispatch();
  const checkDaysOfWeek = momentDate.format('ddd');

  useEffect(() => {
    dispatch(updateDate(momentDate.format('YYYY-MM-DD')));
  }, [dispatch, momentDate]);

  const prevMonthHandler = async () => {
    if (changePeriod === 'month') {
      setMomentDate(prev => prev.clone().subtract(1, 'month'));
      return;
    }

    if (changePeriod === 'day') {
      setMomentDate(prev => prev.clone().subtract(1, 'day'));
      return;
    }
  };

  const nextMonthHandler = () => {
    if (changePeriod === 'month') {
      setMomentDate(prev => prev.clone().add(1, 'month'));
      return;
    }

    if (changePeriod === 'day') {
      setMomentDate(prev => prev.clone().add(1, 'day'));
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
          disabled={
            changePeriod === 'day' &&
            (checkDaysOfWeek === 'Mon' || checkDaysOfWeek === 'пн')
          }
          onClick={prevMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-left'}></use>
          </Icon>
        </PaginatorBtn>
        <PaginatorBtn
          disabled={
            changePeriod === 'day' &&
            (checkDaysOfWeek === 'Sun' || checkDaysOfWeek === 'нд')
          }
          onClick={nextMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-right'}></use>
          </Icon>
        </PaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
}
