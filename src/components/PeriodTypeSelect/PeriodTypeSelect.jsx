import { BtnDay, BtnMonth } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ selectedDay }) => {
  return (
    <div>
      <BtnMonth to={`month/${selectedDay}`}>Month</BtnMonth>
      <BtnDay to={`day/${selectedDay}`}>Day</BtnDay>
    </div>
  );
};

export default PeriodTypeSelect;
