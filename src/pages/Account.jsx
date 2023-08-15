<<<<<<< HEAD
// import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm/UserForm';
// import { login, logout } from '../redux/auth/operations';

export default function Account() {
  // const dispatch = useDispatch();
=======
import UserForm from '../components/UserForm/UserForm';

export default function Account() {
>>>>>>> dev
  return (
    <div>
      <p>Account Page</p>

<<<<<<< HEAD
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

=======
>>>>>>> dev
      <UserForm />
    </div>
  );
}
