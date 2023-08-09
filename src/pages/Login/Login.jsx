import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <LoginForm />
      <AuthNavigate />
    </div>
  );
}
