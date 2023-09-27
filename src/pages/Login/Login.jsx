import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { ImageContainer, PageContainer, FormContainer } from './Login.styled';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <AuthNavigate link="/register" text={t('auth.signUp')} />
      <ImageContainer />
    </PageContainer>
  );
}
