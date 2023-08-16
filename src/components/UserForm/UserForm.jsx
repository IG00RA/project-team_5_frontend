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
  UserInfoForm,
  Label,
  UserPreview,
  UserData,
  UserName,
  UserLabel,
  ButtonWrapper,
  Icon,
  Use,
} from './UserForm.styled';
import { selectIsLoadingUser } from '../../redux/user/selectors';
import ChangeProfileButton from '../Buttons/ChangeProfileButton/ChangeProfileButton';
import { changeProfile } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import sprite from '../../images/svg-sprite/symbol-defs.svg';

export default function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUser = user.email;
  const isLoading = useSelector(selectIsLoadingUser);

  const setSubmitButtonActive = () => {
    const btn = document.querySelector('#changeProfileBtn');
    btn.disabled = false;
  };

  const setSubmitButtonDisabled = () => {
    const btn = document.querySelector('#changeProfileBtn');
    btn.disabled = true;
  };

  const makeAvatarURL = values => {
    return typeof values.avatarURL === 'string' ||
      values.avatarURL === 'undefined'
      ? values.avatarURL
      : URL.createObjectURL(values.avatarURL);
  };

  const compareWithRedux = (field, value) => {
    const reduxValue = user[field];
    return value === reduxValue;
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
      const value = values[field];
      formData.append(field, value);
    });

    dispatch(changeProfile({ formData, setSubmitButtonDisabled }));
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

            compareWithRedux(name, value)
              ? setSubmitButtonDisabled()
              : setSubmitButtonActive();
          };

          const fileHandler = e => {
            const file = e.target.files[0];
            if (!file) return;

            setFieldValue('avatarURL', file);
            setSubmitButtonActive();
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

                  <Icon>
                    <Use href={`${sprite}#icon-plus`}></Use>
                  </Icon>
                </AvatarField>

                <UserData>
                  <UserName>{values.userName || 'UserName'}</UserName>
                  <UserLabel>User</UserLabel>
                </UserData>
              </UserPreview>

              <CommonField>
                <Label>User Name</Label>
                <CommonInput
                  name="userName"
                  type="text"
                  value={values.userName}
                  placeholder="mr Ping"
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
                  placeholder="066-333-33-33"
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
                  placeholder="skype name"
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
                  placeholder="mrPing@panda.kungfu"
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
