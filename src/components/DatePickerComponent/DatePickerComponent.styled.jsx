import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: #3e85f3;
    border-radius: 16px;
    font-family: inherit;

    width: 235px;

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
      padding: 18px 18px;
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
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 600;
    line-height: calc(20 / 16);
    color: #fff;

    @media screen and (min-width: 375px) {
      font-size: 16px;
      line-height: calc(24 / 20);
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: calc(28 / 24);
    }
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    column-gap: 14px;
    margin: 0;
    margin-top: 11px;
  }

  .react-datepicker__day--outside-month {
    opacity: 0;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 9px;
  }

  .react-datepicker__day-name {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: calc(24 / 18);
    }
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .react-datepicker__day {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1px;

    border-radius: 50%;

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

    padding: 3px 3px;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);
    color: #3e85f3;
    outline: #fff;

    @media screen and (min-width: 768px) {
      padding: 12px 20px;
    }
  }

  .react-datepicker__navigation--next {
    margin-top: 26px;
    margin-right: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;
    color: #fff;
  }

  .react-datepicker__navigation--previous {
    margin-top: 26px;
    margin-left: 18px;
    font-weight: 400;
    width: 15px;
    height: 15px;
    border: none;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    cursor: pointer;
  }
`;
