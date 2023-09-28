import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper } from './DatePickerComponent.styled';

import { registerLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-GB';
import uk from 'date-fns/locale/uk';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const DatePickerComponent = ({ startDate, setStartDate, customInput }) => {
  i18next.language === 'en'
    ? registerLocale('en', { ...en, options: { weekStartsOn: 1 } })
    : registerLocale('uk', { ...uk, options: { weekStartsOn: 1 } });
  const { t } = useTranslation();
  const customDayNameOfWeek = () => {
    const dayNameElements = document.querySelectorAll(
      '.react-datepicker__day-name'
    );
    // const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const dayNames = [
      t('days.monday'),
      t('days.tuesday'),
      t('days.wednesday'),
      t('days.thursday'),
      t('days.friday'),
      t('days.saturday'),
      t('days.sunday'),
    ];

    return dayNameElements?.forEach((dayElement, index) => {
      dayElement.textContent = dayNames[index];
    });
  };
  console.log(i18next.language);
  return (
    <DatePickerWrapper>
      <DatePicker
        dateFormat="dd MMMM yyyy"
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
        customInput={customInput}
        locale={i18next.language}
        weekDayClassName={customDayNameOfWeek}
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
