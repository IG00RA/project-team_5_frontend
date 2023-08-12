import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { ImageContainer, PageContainer, FormContainer } from './Login.styled';

export default function Login() {
  return (
    <PageContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <AuthNavigate link="/register" text="Sign Up" />
      <ImageContainer />
    </PageContainer>
  );
}
