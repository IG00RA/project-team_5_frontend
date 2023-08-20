import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 28px 14px 0px;
  margin-bottom: 20px;
  @media (min-width: ${p => p.theme.media.m}) {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-top: 132px;
    padding-left: 64px;
    margin-bottom: 40px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding-top: 134px;
    padding-left: 153px;
  }
`;

export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  margin-bottom: 26px;
  @media (min-width: ${p => p.theme.media.m}) {
    gap: 8px;
    margin-bottom: 0;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (min-width: ${p => p.theme.media.m}) {
    padding-right: 64px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding-right: 154px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColoredSquare = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const CategoryText = styled.p`
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  font-family: ${props => props.fontFamily};
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 16px;
    line-height: 1.13;
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
  color: #fff;

  @media (min-width: ${p => p.theme.media.m}) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
`;

export const PaginatorBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 30px;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: ${p => (p.$isPrevBtn ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};

  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #fff;
  color: ${p =>
    p.disabled ? 'rgba(220, 227, 229, 1)' : 'rgba(52, 52, 52, 1)'};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;

export const Icon = styled.svg`
  display: inline-block;
  height: 18px;
  width: 18px;
  stroke-width: 0;
  stroke: #dce3e5;
  fill: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: #343434;
  }
`;
