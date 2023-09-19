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

const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(emailRegexp, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const LoginForm = () => {
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
            <FormTitle>Log In</FormTitle>
            <Label className={isValid('email')}>
              Email
              <Wrapper>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="nadiia@gmail.com"
                  title="Email must be in the format username@domain.com"
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
                <p>This is a CORRECT email</p>
              )}
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label className={isValid('password')}>
              Password
              <Wrapper>
                <Field
                  autoComplete="new-password"
                  className={isValid('password')}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
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
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Log In
              <LoginIcon>
                <use href={sprite + '#icon-log-in'}></use>
              </LoginIcon>
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
