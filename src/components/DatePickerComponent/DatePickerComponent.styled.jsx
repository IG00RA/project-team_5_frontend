import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: #3e85f3;
    border-radius: 16px;
    font-family: inherit;

    width: 300px;

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

  .react-datepicker__month-container {
    width: 100%;
    padding: 5px 10px;

    @media screen and (min-width: 375px) {
      padding: 9px 13px;
    }

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
    font-size: 16px;
    font-weight: 600;
    line-height: calc(20 / 16);

    @media screen and (min-width: 375px) {
      font-size: 20px;
      line-height: calc(24 / 20);
    }

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
    padding: 10px 18px;

    font-size: 12px;
    font-weight: 400;
    line-height: calc(16 / 12);
    color: #fff;

    @media screen and (min-width: 375px) {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    @media screen and (min-width: 768px) {
      padding: 12px 22px;
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
    margin-top: 18px;
    margin-right: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;
    color: #fff;

    @media screen and (min-width: 375px) {
      margin-top: 24px;
      margin-right: 18px;
    }
  }

  .react-datepicker__navigation--previous {
    margin-top: 18px;
    margin-left: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;

    @media screen and (min-width: 375px) {
      margin-top: 24px;
      margin-right: 18px;
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`;
