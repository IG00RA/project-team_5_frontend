import { Formik } from 'formik';
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
  ErrorText,
  BirthdayInput,
} from './UserForm.styled';
import { selectIsLoadingUser } from '../../redux/user/selectors';
import ChangeProfileButton from '../Buttons/ChangeProfileButton/ChangeProfileButton';
import { changeProfile } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import DatePickerComponent from 'components/DatePickerComponent/DatePickerComponent';
import { DatePickerUserFormInput } from 'components/DatePickerUserFormInput/DatePickerUserFormInput';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
          const currentBirthday = values.birthday
            ? new Date(values.birthday)
            : new Date();

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

          const setStartDate = date => {
            const formatedDate = date
              .toLocaleString()
              .split(',')[0]
              .split('.')
              .reverse()
              .join('-');

            setFieldValue('birthday', formatedDate);
            compareWithRedux('birthday', formatedDate)
              ? setSubmitButtonDisabled()
              : setSubmitButtonActive();
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
                  <UserLabel>{t('userProfile.user')}</UserLabel>
                </UserData>
              </UserPreview>

              <CommonField>
                <Label>{t('userProfile.name')}</Label>
                <CommonInput
                  name="userName"
                  type="text"
                  value={values.userName}
                  placeholder="mr Ping"
                  onChange={inputHandler}
                />
                <ErrorText name="userName" component="p" />
              </CommonField>

              <CommonField>
                <Label>{t('userProfile.phone')}</Label>
                <CommonInput
                  name="phone"
                  type="tel"
                  value={values.phone}
                  placeholder="066-333-33-33"
                  onChange={inputHandler}
                />
                <ErrorText name="phone" component="p" />
              </CommonField>

              <CommonField>
                <Label>{t('userProfile.birthday')}</Label>
                <DatePickerComponent
                  startDate={currentBirthday}
                  setStartDate={setStartDate}
                  customInput={<DatePickerUserFormInput />}
                />
                <BirthdayInput
                  name="birthday"
                  type="date"
                  value={values.birthday}
                  onChange={inputHandler}
                />
              </CommonField>

              <CommonField>
                <Label>{t('userProfile.skype')}</Label>
                <CommonInput
                  name="skype"
                  type="text"
                  value={values.skype}
                  placeholder="skype name"
                  onChange={inputHandler}
                />
                <ErrorText name="skype" component="p" />
              </CommonField>

              <CommonField>
                <Label>{t('userProfile.email')}</Label>
                <CommonInput
                  name="email"
                  type="text"
                  value={values.email}
                  placeholder="mrPing@panda.kungfu"
                  onChange={inputHandler}
                />
                <ErrorText name="email" component="p" />
              </CommonField>

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
