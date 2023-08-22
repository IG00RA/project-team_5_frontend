import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: ${p => p.theme.media.m}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  @media (min-width: ${p => p.theme.media.l}) {
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;

  @media (min-width: ${p => p.theme.media.m}) {
    gap: 8px;
    margin-bottom: 0;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
  color: ${props => {
    return props.theme.colors.statisticsPage.mainText;
  }};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
`;

export const Icon = styled.svg`
  display: inline-block;
  height: 18px;
  width: 18px;
  stroke-width: 0;
  stroke: ${props => props.theme.colors.statisticsPage.colorIcon};
  fill: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  border: 1px solid ${props => props.theme.colors.statisticsPage.todayBorder};

  &:hover {
    box-shadow: 4px 2px 16px 0px ${props => props.theme.colors.button.shadow};
    ${Icon} {
      stroke: ${props => props.theme.colors.statisticsPage.hoverIcon};
    }
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;
