import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <RegisterForm />
      <AuthNavigate />
    </div>
  );
}
