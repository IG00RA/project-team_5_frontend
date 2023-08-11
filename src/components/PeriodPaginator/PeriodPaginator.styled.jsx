import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Period = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  line-height: calc(18 / 16);
  text-transform: uppercase;
  background-color: #3e85f3;
  color: #fff;
`;

export const BtnPrev = styled.button`
  width: 38px;
  height: 34px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: rgba(52, 52, 52, 1);
  font-weight: 700;
  cursor: pointer;
`;

export const BtnNext = styled.button`
  width: 38px;
  height: 34px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: rgba(52, 52, 52, 1);
  font-weight: 700;
  cursor: pointer;
`;
