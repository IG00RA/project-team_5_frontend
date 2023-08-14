import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnMonth = styled(NavLink)`
  padding: 8px 16px;
  width: 82px;
  height: 34px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid rgba(62, 133, 243, 0.2);
  background-color: rgba(202, 232, 255, 1);
  color: #3e85f3;
  cursor: pointer;
`;

export const BtnDay = styled(NavLink)`
  padding: 8px 16px;
  width: 82px;
  height: 34px;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid rgba(62, 133, 243, 0.2);
  background-color: #e3f3ff;
  color: #3e85f3;
  cursor: pointer;
`;
