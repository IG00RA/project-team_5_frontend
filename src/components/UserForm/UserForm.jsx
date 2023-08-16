import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchema } from '../../schemas';
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
  UserPreview,
  UserData,
  UserName,
  UserLabel,
  ButtonWrapper,
} from './UserForm.styled';
import { selectIsLoading } from '../../redux/auth/selectors';
import ChangeProfileButton from '../Buttons/ChangeProfileButton/ChangeProfileButton';
import { changeProfile } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
// import Loader from '../loader/loader';

export default function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUser = user.email;
  const isLoading = useSelector(selectIsLoading);

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

  return (
    isUser && (
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
              <UserPreview>
                <AvatarField>
                  {makeAvatarURL(values) ? (
                    <AvatarContainer>
                      <AvatarImg
                        src={makeAvatarURL(values)}
                        alt="User avatar"
                      />
                    </AvatarContainer>
                  ) : (
                    <AvatarContainer>
                      <AvatarTextContainer>
                        <AvatarText>{values.userName[0]}</AvatarText>
                      </AvatarTextContainer>
                    </AvatarContainer>
                  )}

                  <FileInput
                    name="avatarUrl"
                    type="file"
                    onChange={fileHandler}
                  />

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

                <UserData>
                  <UserName>{values.userName}</UserName>
                  <UserLabel>User</UserLabel>
                </UserData>
              </UserPreview>

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

              <ButtonWrapper>
                <ChangeProfileButton isLoading={isLoading} disabled={true} />
              </ButtonWrapper>
            </UserInfoForm>
          );
        }}
      </Formik>
    )
  );
}
