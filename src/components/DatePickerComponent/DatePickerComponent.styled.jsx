import styled from 'styled-components';

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
    font-family: inherit;

    width: 100%;

    @media screen and (min-width: 375px) {
      width: 327px;
    }

    @media screen and (min-width: 768px) {
      width: 373px;
    }
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.2);
  }

  .react-datepicker__header {
  }

  .react-datepicker__month-container {
    width: 100%;
    padding: 9px 13px;

    @media screen and (min-width: 768px) {
      padding: 9px 18px;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__header {
    background-color: #3e85f3;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .react-datepicker__current-month {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: calc(24 / 20);

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: calc(28 / 24);
    }
  }

  .react-datepicker__day--outside-month {
    opacity: 0;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .react-datepicker__day-name {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14);
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: calc(24 / 18);
    }
  }

  .react-datepicker__week {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__day {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    padding: 12px 22px;

    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: #fff;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: calc(24 / 18);
    }
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.4);
  }

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
    color: #fff;
    margin-top: 24px;
    margin-right: 18px;
    width: 15px;
    height: 15px;
    border: none;
  }

  .react-datepicker__navigation--next {
    margin-top: 24px;
    margin-right: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;
    color: #fff;
  }

  .react-datepicker__navigation--previous {
    margin-top: 24px;
    margin-left: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;
  }
`;
