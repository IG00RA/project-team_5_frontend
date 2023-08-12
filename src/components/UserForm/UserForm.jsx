import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { changeProfile } from '../../redux/auth/operations';
import { AvatarContainer } from './UserForm.styled';

export default function UserForm() {
  const dispatch = useDispatch();

  const setActiveSabmit = id => {
    const btn = document.querySelector(id);
    btn.disabled = false;
  };

  const isValidFileType = value => value.type.includes('image');

  const initialValues = {
    avatarURL: '',
    userName: 'Petro',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        const formData = new FormData();
        const inputFields = Object.keys(values);

        inputFields.forEach(field => {
          formData.append(field, values[field]);
        });

        dispatch(changeProfile(formData));
      }}
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

        const makeAvatarURL = () => {
          return typeof values.avatarURL === 'string'
            ? values.avatarURL
            : URL.createObjectURL(values.avatarURL);
        };

        return (
          <form onSubmit={handleSubmit}>
            <label>
              {makeAvatarURL() ? (
                // <div className="avatar">
                // <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                //   <img src={makeAvatarURL()} alt="userAvatar" />
                // </div>
                // </div>
                <AvatarContainer className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={makeAvatarURL()} alt="userAvatar" />
                  </div>
                </AvatarContainer>
              ) : (
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-3xl">{values.userName[0]}</span>
                  </div>
                </div>
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
