const { forwardRef } = require('react');
const { Period } = require('./DatePickerStatisticsInput.styled');

export const DatePickerStatisticsInput = forwardRef(
  ({ value, onClick }, ref) => (
    <Period onClick={onClick} ref={ref}>
      {value}
    </Period>
  )
);
