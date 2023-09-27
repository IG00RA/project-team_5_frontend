import moment from 'moment';
import { BtnWrapper, PeriodTypeBtn } from './PeriodTypeSelect.styled';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = () => {
  const { t } = useTranslation();
  return (
    <BtnWrapper>
      <PeriodTypeBtn
        $activeClassName="active"
        type="month"
        $isMonth
        to={`month/${moment().format('YYYY-MM-DD')}`}
      >
        {t('calendar.month')}
      </PeriodTypeBtn>
      <PeriodTypeBtn
        $activeClassName="active"
        type="day"
        to={`day/${moment().format('YYYY-MM-DD')}`}
      >
        {t('calendar.day')}
      </PeriodTypeBtn>
    </BtnWrapper>
  );
};

export default PeriodTypeSelect;
