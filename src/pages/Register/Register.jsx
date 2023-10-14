import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  PageContainer,
  ImageContainer,
  FormContainer,
} from './Register.styled';
import { useTranslation } from 'react-i18next';

export default function Register() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
      <AuthNavigate link="/login" text={t('auth.logIn')} />
      <ImageContainer />
    </PageContainer>
  );
}
