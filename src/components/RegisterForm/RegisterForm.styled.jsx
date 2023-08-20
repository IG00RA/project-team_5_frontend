import { styled } from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

import { lightColors } from 'utils/theme';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  background-color: ${lightColors.white};
  border-radius: 8px;

  @media screen and (max-width: ${props => props.theme.media.s}) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    padding: 40px;
  }
`;

export const Label = styled.label`
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  color: ${lightColors.blackText};

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: ${props => props.theme.media.m}) {
      margin-bottom: 18px;
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 32px;

    @media screen and (min-width: ${props => props.theme.media.m}) {
      margin-bottom: 48px;
    }
  }

  &.is-valid {
    color: #3cbc81;
  }

  &.is-invalid {
    color: #e74a3b;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    font-family: Inter;
    font-size: 12px;
    line-height: 1.17;
    color: #3cbc81;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const Field = styled(FormikField)`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.29px;

  background-color: ${lightColors.white};
  color: ${lightColors.blackText};
  outline: none;
  border: 1px solid #dce3e5;
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }

  &::placeholder {
    color: #dce3e5;
    font-family: Inter;
    font-size: 14px;
    line-height: 1.29;
    @media screen and (min-width: ${props => props.theme.media.m}) {
      font-size: 16px;
      line-height: 1.12;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid ${lightColors.blackText};
  }

  &.is-valid {
    border: 1px solid #3cbc81;
  }

  &.is-invalid {
    border: 1px solid #e74a3b;
  }
`;

export const FormTitle = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  color: ${lightColors.blue};
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  text-shadow:
    0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: ${props => props.theme.media.m}) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${lightColors.redPriority};
  font-size: 0.8rem;
  margin-top: 0.2rem;
  margin-left: 18px;
  margin-top: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding-top: 14px;
  padding-bottom: 14px;
  color: ${lightColors.white};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
  cursor: pointer;

  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  color: ${lightColors.white};
  background-color: ${lightColors.blue};
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${lightColors.darkBlue};
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LoginIcon = styled.svg`
  stroke: ${lightColors.white};
  height: 18px;
  width: 18px;
  fill: transparent;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    height: 20px;
    width: 20px;
  }
`;

export const ToggleButton = styled.button`
  color: ${lightColors.blackText};
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SuccessIcon = styled.svg`
  position: absolute;
  height: 18px;
  width: 18px;
  fill: #3cbc81;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`;

export const ErrorIcon = styled.svg`
  position: absolute;
  height: 18px;
  width: 18px;
  fill: #e74a3b;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`;
