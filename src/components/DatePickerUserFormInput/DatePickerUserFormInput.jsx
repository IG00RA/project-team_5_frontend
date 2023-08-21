const { forwardRef } = require('react');
const { Period } = require('./DatePickerUserFormInput.styled');

export const DatePickerUserFormInput = forwardRef(({ value, onClick }, ref) => (
  <Period onClick={onClick} ref={ref}>
    {value}
  </Period>
));
