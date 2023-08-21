import styled from 'styled-components';
import { lightColors } from 'utils/theme';

import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 28px 20px;
  border-radius: 16px;
  width: 335px;
  background: ${lightColors.white};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media (min-width: ${props => props.theme.media.m}) {
    width: 468px;
    padding: 32px;
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.modal.labelText};
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const EditWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.modal.rewiev.pencilIconBg};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  & svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.colors.modal.rewiev.pencilIcon};
    fill: transparent;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.modal.rewiev.pencilIcon};
    & svg {
      stroke: ${props => props.theme.colors.modal.rewiev.pencilIconHover};
      fill: transparent;
    }
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.modal.rewiev.trashIconBg};
  color: ${props => props.theme.colors.modal.rewiev.trashIcon};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.colors.modal.rewiev.trashIcon};
    fill: transparent;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.modal.rewiev.trashIcon};
    color: ${props => props.theme.colors.modal.rewiev.trashIconHover};
    & svg {
      stroke: currentColor;
      fill: transparent;
    }
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InputWrapper = styled.div`
  margin-bottom: 18px;
`;

export const Input = styled(Field)`
  font-family: Inter;
  resize: none;
  padding: 12px 0 12px 14px;
  width: 295px;
  box-sizing: border-box;
  height: 127px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.colors.modal.mainText};

  background-color: ${props => props.theme.colors.modal.textAreaBg};
  border-radius: 8px;

  @media (min-width: ${props => props.theme.media.m}) {
    width: 404px;
  }

  @media (min-width: ${props => props.theme.media.l}) {
    margin-bottom: 18px;
  }
  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    font-family: Inter;
    opacity: 1;
    color: #343434;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  max-width: 240px;
  font-size: 12px;
  font-weight: 500;
  @media (min-width: ${props => props.theme.media.m}) {
    max-width: 330px;
  }
`;

export const FormBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FormBtn = styled.button`
  color: ${props => props.theme.colors.button.text};
  background-color: ${props => props.theme.colors.button.mainBg};
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.button.hoverBg};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CancelBtn = styled.button`
  color: ${props => props.theme.colors.modal.mainText};
  background-color: ${props => props.theme.colors.modal.rewiev.cancelBtnBg};
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.button.text};
    background-color: ${props => props.theme.colors.button.hoverBg};
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
