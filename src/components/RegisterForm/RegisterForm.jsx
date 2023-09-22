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
const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Name is required')
    .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 2 and 30 characters')
    .test(
      'name-validation',
      'Name must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(emailRegexp, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const RegisterForm = () => {
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
            <FormTitle>Sign Up</FormTitle>
            <Label className={isValid('userName')}>
              Name
              <Wrapper>
                <Field
                  className={isValid('userName')}
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
                <p>This is a CORRECT name</p>
              )}
              <ErrorMessage name="userName" component="div" />
            </Label>
            <Label className={isValid('email')}>
              Email
              <Wrapper>
                <Field
                  autoComplete="email-no-fill"
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="Enter email"
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
              Sign Up
              <LoginIcon>
                <use href={sprite + '#icon-log-in'}></use>
              </LoginIcon>
            </Button>
            <GoogleBtn text="Sign Up with Google" />
          </Form>
        );
      }}
    </Formik>
  );
};
