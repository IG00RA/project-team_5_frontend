import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { changeProfile, login } from '../../redux/auth/operations';
import {
  AvatarContainer,
  AvatarField,
  AvatarImg,
  AvatarText,
  AvatarTextContainer,
  CommonField,
  CommonInput,
  FileInput,
  Svg,
  SvgWrapper,
  UserInfoForm,
  Label,
} from './UserForm.styled';
import { selectUser } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import ChangeProfileButton from '../Buttons/ChangeProfileButton/ChangeProfileButton';
import Loader from '../loader/loader';

export default function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(state => state.auth.isLoading);

  //
  useEffect(() => {
    dispatch(login({ email: 'vlad2@gmail.com', password: 'vlad222' }));
  }, [dispatch]);
  //

  const setActiveSabmit = id => {
    const btn = document.querySelector(id);
    btn.disabled = false;
  };

  const makeAvatarURL = values => {
    return typeof values.avatarURL === 'string' ||
      values.avatarURL === 'undefined'
      ? values.avatarURL
      : URL.createObjectURL(values.avatarURL);
  };

  const isValidFileType = value => value.type.includes('image');

  const initialValues = {
    avatarURL: user.avatarURL,
    userName: user.userName,
    phone: user.phone,
    birthday: user.birthday,
    skype: user.skype,
    email: user.email,
  };

  const onSubmit = values => {
    const inputFields = Object.keys(values);

    const formData = new FormData();
    inputFields.forEach(field => {
      const value = values[field] ? values[field] : ' ';
      formData.append(field, value);
    });

    dispatch(changeProfile(formData));
  };

  const validationSchema = Yup.object({
    avatarURL: Yup.mixed().test(
      'is-valid-type',
      'Not a valid image type',
      value => {
        if (value?.type) {
          return isValidFileType(value);
        }
        return true;
      }
    ),
    userName: Yup.string().max(16).required(),
    phone: Yup.string()
      .matches(
        /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
        'This is an ERROR phone number'
      )
      .max(20),
    birthday: Yup.date(),
    skype: Yup.string().max(16),
    email: Yup.string().email().required(),
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, handleSubmit }) => {
        const inputHandler = e => {
          const { name, value } = e.target;
          setFieldValue(name, value);
          // Додати перевірку на співпадіння з полем в редаксі
          setActiveSabmit('#changeProfileBtn');
        };

        const fileHandler = e => {
          const file = e.target.files[0];
          if (!file) return;

          setFieldValue('avatarURL', file);
          // Додати перевірку на співпадіння з полем в редаксі
          setActiveSabmit('#changeProfileBtn');
        };

        return (
          <UserInfoForm onSubmit={handleSubmit}>
            <AvatarField>
              {makeAvatarURL(values) ? (
                <AvatarContainer>
                  <AvatarImg src={makeAvatarURL(values)} alt="userAvatar" />
                </AvatarContainer>
              ) : (
                <AvatarContainer>
                  <AvatarTextContainer>
                    <AvatarText>{values.userName[0]}</AvatarText>
                  </AvatarTextContainer>
                </AvatarContainer>
              )}

              <FileInput name="avatarUrl" type="file" onChange={fileHandler} />

              <SvgWrapper>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 3.75V14.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 9H14.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </SvgWrapper>
            </AvatarField>

            <ErrorMessage name="avatarUrl" />

            <div>
              <p>{values.userName}</p>
              <p>User</p>
            </div>

            <CommonField>
              <Label>User Name</Label>
              <CommonInput
                name="userName"
                type="text"
                value={values.userName}
                onChange={inputHandler}
              />
            </CommonField>
            <ErrorMessage name="userName" />

            <CommonField>
              <Label>Phone</Label>
              <CommonInput
                name="phone"
                type="tel"
                value={values.phone}
                onChange={inputHandler}
              />
            </CommonField>
            <ErrorMessage name="phone" />

            <CommonField>
              <Label>Birthday</Label>
              <CommonInput
                name="birthday"
                type="date"
                value={values.birthday}
                onChange={inputHandler}
              />
            </CommonField>
            <ErrorMessage name="birthday" />

            <CommonField>
              <Label>Skype</Label>
              <CommonInput
                name="skype"
                type="text"
                value={values.skype}
                onChange={inputHandler}
              />
            </CommonField>
            <ErrorMessage name="skype" />

            <CommonField>
              <Label>Email</Label>
              <CommonInput
                name="email"
                type="text"
                value={values.email}
                onChange={inputHandler}
              />
            </CommonField>
            <ErrorMessage name="email" />

            <ChangeProfileButton disabled={true} />
          </UserInfoForm>
        );
      }}
    </Formik>
  );
}
