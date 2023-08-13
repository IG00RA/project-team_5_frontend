import { NavLink } from 'react-router-dom';
import { BtnDay, BtnMonth } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  return (
    <div>
      <BtnMonth>
        <NavLink to="month/:currentDay">Month</NavLink>
      </BtnMonth>
      <BtnDay>
        <NavLink to="day/:currentDay">Day</NavLink>
      </BtnDay>
    </div>
  );
};

export default PeriodTypeSelect;
