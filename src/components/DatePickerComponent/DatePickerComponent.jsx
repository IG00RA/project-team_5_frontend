import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper } from './DatePickerComponent.styled';

import { registerLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-GB';

registerLocale('en', { ...en, options: { weekStartsOn: 1 } });

const DatePickerComponent = ({ startDate, setStartDate, customInput }) => {
  const customDayNameOfWeek = () => {
    const dayNameElements = document.querySelectorAll(
      '.react-datepicker__day-name'
    );
    const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return dayNameElements.forEach((dayElement, index) => {
      dayElement.textContent = dayNames[index];
    });
  };
  return (
    <DatePickerWrapper>
      <DatePicker
        dateFormat="dd MMMM yyyy"
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
        customInput={customInput}
        locale="en"
        weekDayClassName={customDayNameOfWeek}
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
