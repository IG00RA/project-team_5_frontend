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
      <button type="button">
        <a
          href="https://project-team-5-backend.onrender.com/api/auth/google"
          target="blank"
        >
          Login with Google
        </a>
      </button>
      <ImageContainer />
    </PageContainer>
  );
}
