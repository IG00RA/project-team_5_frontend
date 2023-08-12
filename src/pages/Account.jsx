import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm/UserForm';
// import { login, logout } from '../redux/auth/operations';

export default function Account() {
  // const dispatch = useDispatch();
  return (
    <div>
      <p>Account Page</p>

      {/* <button
        type="button"
        onClick={() => {
          dispatch(login({ email: 'user@example.com', password: 'qwerty123' }));
        }}
      >
        login
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button> */}

      <UserForm />
    </div>
  );
}
