// import { useEffect } from 'react';
import UserForm from '../components/UserForm/UserForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from 'redux/auth/operations';
// import { selectIsLoading } from 'redux/auth/selectors';
// import Loader from 'components/loader/loader';

export default function Account() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // let isFirstRender = true;

  // useEffect(() => {
  //   dispatch(login({ email: 'vlad2@gmail.com', password: 'vlad222' }));
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //   }
  //   console.log(isFirstRender);
  // }, [dispatch, isFirstRender]);

  return (
    // isLoading && isFirstRender ? <Loader /> :
    <UserForm />
  );
}
