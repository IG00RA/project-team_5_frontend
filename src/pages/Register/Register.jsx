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
      <ImageContainer />
    </PageContainer>
  );
}
