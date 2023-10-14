import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import {
  Form,
  FormTitle,
  Field,
  Label,
  ErrorMessage,
  Wrapper,
  Button,
  LoginIcon,
  SuccessIcon,
  ErrorIcon,
  ToggleButton,
} from './RegisterForm.styled';

import { ReactComponent as ShowPasswordIcon } from '../../images/svg/view-show-icon.svg';
import { ReactComponent as HidePasswordIcon } from '../../images/svg/hidden-eye-close-hide-icon-232825.svg';

import sprite from '../../images/svg-sprite/symbol-defs.svg';
import GoogleBtn from 'components/Buttons/GoogleBtn/GoogleBtn';
import { useTranslation } from 'react-i18next';
const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

export const RegisterForm = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required(t('valid.nameRequired'))
      .matches(/^\S[\S\s]{0,28}\S$/, t('valid.nameMatch'))
      .test(
        'name-validation',
        'Name must be at least 2 characters long',
        value => {
          return value && value.replace(/\s/g, '').length >= 2;
        }
      ),
    email: Yup.string()
      .email(t('valid.emailError'))
      .matches(emailRegexp, t('valid.emailLatin'))
      .required(t('valid.emailRequired')),
    password: Yup.string()
      .required(t('valid.passwordRequired'))
      .min(6, t('valid.passwordMin'))
      .matches(/^\S*$/, t('valid.passwordSpaces')),
  });

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={{ userName: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={({ ...values }, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      {({ isSubmitting, values, errors, touched, handleSubmit }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormTitle>{t('register.signUp')}</FormTitle>
            <Label className={isValid('userName')}>
              {t('register.name')}
              <Wrapper>
                <Field
                  className={isValid('userName')}
                  type="text"
                  name="userName"
                  placeholder={t('register.enterName')}
                  title={t('register.nameTitle')}
                  value={values.userName}
                />
                {isValid('userName') === 'is-valid' && (
                  <SuccessIcon>
                    <use href={sprite + '#icon-done-logo'}></use>
                  </SuccessIcon>
                )}
                {isValid('userName') === 'is-invalid' && (
                  <ErrorIcon>
                    <use href={sprite + '#icon-error-logo'}></use>
                  </ErrorIcon>
                )}
              </Wrapper>
              {isValid('userName') === 'is-valid' && (
                <p>{t('valid.correctName')}</p>
              )}
              <ErrorMessage name="userName" component="div" />
            </Label>
            <Label className={isValid('email')}>
              {t('logIn.email')}
              <Wrapper>
                <Field
                  autoComplete="email-no-fill"
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder={t('register.enterEmail')}
                  title={t('logIn.emailTitle')}
                  value={values.email}
                />
                {isValid('email') === 'is-valid' && (
                  <SuccessIcon>
                    <use href={sprite + '#icon-done-logo'}></use>
                  </SuccessIcon>
                )}
                {isValid('email') === 'is-invalid' && (
                  <ErrorIcon>
                    <use href={sprite + '#icon-error-logo'}></use>
                  </ErrorIcon>
                )}
              </Wrapper>
              {isValid('email') === 'is-valid' && (
                <p>{t('valid.correctEmail')}</p>
              )}
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label className={isValid('password')}>
              {t('logIn.password')}
              <Wrapper>
                <Field
                  autoComplete="new-password"
                  className={isValid('password')}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder={t('logIn.enterPassword')}
                  title={t('logIn.PasswordTitle')}
                  value={values.password}
                />

                <ToggleButton
                  type="button"
                  aria-label="show-hide password"
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                </ToggleButton>
              </Wrapper>
              {isValid('password') === 'is-valid' && (
                <p>{t('valid.correctPassword')}</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              {t('register.signUp')}
              <LoginIcon>
                <use href={sprite + '#icon-log-in'}></use>
              </LoginIcon>
            </Button>
            <GoogleBtn text={t('register.Google')} />
          </Form>
        );
      }}
    </Formik>
  );
};
