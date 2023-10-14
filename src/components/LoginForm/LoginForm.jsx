import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login, setAuthToken } from 'redux/auth/operations';
import { Formik } from 'formik';
import { ReactComponent as ShowPasswordIcon } from '../../images/svg/view-show-icon.svg';
import { ReactComponent as HidePasswordIcon } from '../../images/svg/hidden-eye-close-hide-icon-232825.svg';
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
} from './LoginForm.styled';
import { useSearchParams } from 'react-router-dom';
import { ToggleButton } from 'components/RegisterForm/RegisterForm.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import GoogleBtn from 'components/Buttons/GoogleBtn/GoogleBtn';
import { useTranslation } from 'react-i18next';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const LoginForm = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
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
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  if (token) {
    dispatch(setAuthToken(token));
  }
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={({ ...values }, actions) => {
        dispatch(login({ ...values }));
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
            <FormTitle>{t('logIn.title')}</FormTitle>
            <Label className={isValid('email')}>
              {t('logIn.email')}
              <Wrapper>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="nadiia@gmail.com"
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
                  title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 6 characters long."
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
              {t('logIn.title')}
              <LoginIcon>
                <use href={sprite + '#icon-log-in'}></use>
              </LoginIcon>
            </Button>
            <GoogleBtn text={t('logIn.Google')} />
          </Form>
        );
      }}
    </Formik>
  );
};
