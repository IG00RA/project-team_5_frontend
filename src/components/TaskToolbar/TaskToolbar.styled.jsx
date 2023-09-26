import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

// этот стилизированный компонент тут пустой не случайно, так нужно, не трогать!
export const Button = styled.button``;
export const Icon = styled.svg`
  height: 16px;
  width: 16px;

  stroke: ${props => props.theme.colors.header.titleText};
  fill: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Button}:hover & {
    stroke: ${props => props.theme.colors.header.accent};
  }
`;

export const WrapperPopUp = styled.div`
  display: none;
  padding: 20px 24px;

  border-radius: 8px;
  background: ${props => props.theme.colors.modal.task.taskBG};
  border: 1px solid ${props => props.theme.colors.modal.task.popUpBorder};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  &:hover {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    position: absolute;
    bottom: -6px;
    right: 50px;
  }
`;

export const CategoryBtn = styled.button`
  &:hover + ${WrapperPopUp} {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    position: absolute;
    bottom: -6px;
    right: 50px;
  }
`;

export const PopUpBtn = styled.button`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 28;

  color: ${props => props.theme.colors.header.titleText};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.header.accent};
  }
`;

export const IconPopUp = styled.svg`
  height: 16px;
  width: 16px;

  fill: transparent;
  stroke: currentColor;
`;

export const ButtonText = styled.span`
  white-space: nowrap;
`;
