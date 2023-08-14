import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { changeProfile, login } from '../../redux/auth/operations';
import {
  AvatarContainer,
  AvatarImg,
  AvatarText,
  TextContainer,
} from './UserForm.styled';
import { selectUser } from '../../redux/auth/selectors';
import { useEffect } from 'react';

export default function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(state => state.auth.isLoading);

  //
  useEffect(() => {
    dispatch(login({ email: 'vlad@gmail.com', password: '123456' }));
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
    inputFields.forEach(field => formData.append(field, values[field]));

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
    phone: Yup.number().min(12),
    birthday: Yup.date(),
    skype: Yup.string(),
    email: Yup.string().email().required(),
  });

  return isLoading ? (
    <div>
      <p>Loading...</p>
    </div>
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
          setActiveSabmit('.submitBtn');
        };

        const fileHandler = e => {
          const file = e.target.files[0];
          if (!file) return;

          setFieldValue('avatarURL', file);
          // Додати перевірку на співпадіння з полем в редаксі
          setActiveSabmit('.submitBtn');
        };

        return (
          <form onSubmit={handleSubmit}>
            <label>
              {makeAvatarURL(values) ? (
                <AvatarContainer>
                  <AvatarImg src={makeAvatarURL(values)} alt="userAvatar" />
                </AvatarContainer>
              ) : (
                <AvatarContainer>
                  <TextContainer>
                    <AvatarText>{values.userName[0]}</AvatarText>
                  </TextContainer>
                </AvatarContainer>
              )}

              <input name="avatarUrl" type="file" onChange={fileHandler} />
            </label>
            <ErrorMessage name="avatarUrl" />

            <label>
              <div>
                <p>User Name</p>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                name="userName"
                type="text"
                value={values.userName}
                onChange={inputHandler}
              />
            </label>
            <ErrorMessage name="userName" />

            <label>
              <div>
                <p>Phone</p>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                name="phone"
                type="number"
                value={values.phone}
                onChange={inputHandler}
              />
            </label>
            <ErrorMessage name="phone" />

            <label>
              <div>
                <p>Birthday</p>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                name="birthday"
                type="date"
                value={values.birthday}
                onChange={inputHandler}
              />
            </label>
            <ErrorMessage name="birthday" />

            <label>
              <div>
                <p>Skype</p>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                name="skype"
                type="text"
                value={values.skype}
                onChange={inputHandler}
              />
            </label>
            <ErrorMessage name="skype" />

            <label>
              <div>
                <p>Email</p>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                name="email"
                type="text"
                value={values.email}
                onChange={inputHandler}
              />
            </label>
            <ErrorMessage name="email" />

            <button
              type="submit"
              className="btn btn-primary submitBtn"
              disabled={true}
            >
              Save changes
            </button>
          </form>
        );
      }}
    </Formik>
  );
}
