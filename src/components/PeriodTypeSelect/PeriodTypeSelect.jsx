import moment from 'moment';
import { BtnDay, BtnMonth, BtnWrapper } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <BtnWrapper>
      <BtnMonth to={`month/${moment().format('YYYY-MM-DD')}`}>Month</BtnMonth>
      <BtnDay to={`day/${moment().format('YYYY-MM-DD')}`}>Day</BtnDay>
    </BtnWrapper>
  );
};

export default PeriodTypeSelect;
