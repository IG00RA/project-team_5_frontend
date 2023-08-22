import * as Yup from 'yup';

const isValidFileType = value => value.type.includes('image');
const regex =
  /((\+38)?\(?\d{3}\)?[\s.-]?\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4})/;

export const validationSchema = Yup.object({
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
    .matches(regex, 'This is an invalid phone number')
    .max(20)
    .min(8),
  birthday: Yup.date(),
  skype: Yup.string().max(16),
  email: Yup.string().email().required(),
});
