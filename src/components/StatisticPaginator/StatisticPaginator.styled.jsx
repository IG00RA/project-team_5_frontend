import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 114px;
  padding-top: 28px;
  padding-left: 14px;
  margin-bottom: 40px;
  @media (min-width: ${p => p.theme.media.m}) {
    padding-top: 132px;
    padding-left: 64px;
    gap: 8px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding-top: 134px;
    padding-left: 153px;
  }
`;

export const Period = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 14);
  text-transform: uppercase;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;

  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
`;

export const BtnNext = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 30px;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: ${p =>
    p.disabled ? 'rgba(220, 227, 229, 1)' : 'rgba(52, 52, 52, 1)'};

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;

export const BtnPrev = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 30px;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: ${p =>
    p.disabled ? 'rgba(220, 227, 229, 1)' : 'rgba(52, 52, 52, 1)'};

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;
