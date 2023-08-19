import styled from 'styled-components';
// import DatePicker from 'react-datepicker';

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Period = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-transform: uppercase;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: #3e85f3;
    border-radius: 16px;

    width: 316px;
    height: 354px;

    @media screen and (min-width: 768px) {
      width: 327px;
      height: 354px;
    }
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.2);
  }

  .react-datepicker__header {
  }

  .react-datepicker__month-container {
    padding: 9px 18px;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__month {
    background-color: #3e85f3;
  }

  .react-datepicker__header {
    background-color: #3e85f3;
  }

  .react-datepicker__current-month {
    color: white;
  }

  .react-datepicker__day-name {
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 10px;
  }

  .react-datepicker__day {
    border-radius: 50%;
    color: white;
  }

  /* .react-datepicker .react-datepicker__day--weekend {
    background-color: rgba(255, 255, 255, 0.4);
  } */

  .react-datepicker__day--selected {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);
    color: #3e85f3;
    outline: #fff;
  }

  .react-datepicker__navigation--next {
    background: url(../images/rightArrow.png) no-repeat;
    margin-top: 24px;
    margin-right: 18px;
    width: 15px;
    height: 15px;
    border: none;
  }

  /* .react-datepicker__day--today {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);
    color: #3e85f3;
    outline: #fff;
  } */

  /* .react-datepicker__day
    .react-datepicker__day--selected
    .react-datepicker__day--today
    .react-datepicker__day--weekend {
  } */

  /* .react-datepicker__day-names,
  .react-datepicker__week {
  } */

  /* span
    .react-datepicker__navigation-icon
    .react-datepicker__navigation-icon--next::before {
    content: 'Next Month';
    position: relative;
    top: 15px;
    right: 15px;
    color: #fff;
    stroke: #fff;
    fill: currentColor;
  } */
  /* 
  .react-datepicker .react-datepicker__day--weekend {
    color: ${p => (p.selected ? '#3e85f3' : 'rgba(255, 255, 255, 0.4)')};
  } */

  /* .react-datepicker__day .eact-datepicker__day--outside-month {
  } */

  /* @media screen and (min-width: 768px) {
   
  } */
`;

export const PaginatorBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 30px;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: ${p => (p.$isPrevBtn ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: ${p =>
    p.disabled ? 'rgba(220, 227, 229, 1)' : 'rgba(52, 52, 52, 1)'};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;
