import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  PageContainer,
  ImageContainer,
  FormContainer,
} from './Register.styled';

export default function Register() {
  return (
    <PageContainer>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
      <AuthNavigate link="/login" text="Log In" />
      <button type="button">
        <a
          href="https://project-google-auth.onrender.com/api/auth/google"
          target="blank"
        >
          Register with Google
        </a>
      </button>
      <ImageContainer />
    </PageContainer>
  );
}
