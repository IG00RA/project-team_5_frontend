import moment from 'moment';
import { BtnWrapper, PeriodTypeBtn } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <BtnWrapper>
      <PeriodTypeBtn $isMonth to={`month/${moment().format('YYYY-MM-DD')}`}>
        Month
      </PeriodTypeBtn>
      <PeriodTypeBtn to={`day/${moment().format('YYYY-MM-DD')}`}>
        Day
      </PeriodTypeBtn>
    </BtnWrapper>
  );
};

export default PeriodTypeSelect;
