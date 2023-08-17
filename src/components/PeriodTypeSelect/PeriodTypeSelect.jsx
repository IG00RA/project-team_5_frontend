import moment from 'moment';
import { BtnDay, BtnMonth } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <div>
      <BtnMonth to={`month/${moment().format('YYYY-MM-DD')}`}>Month</BtnMonth>
      <BtnDay to={`day/${moment().format('YYYY-MM-DD')}`}>Day</BtnDay>
    </div>
  );
};

export default PeriodTypeSelect;
