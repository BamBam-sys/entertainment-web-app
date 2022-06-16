import React from 'react';
import { Button, Heading } from '../../components';
import { useForm } from 'react-hook-form';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './logIn.scss';
import { loading, userAuthenticated } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './../../components/Loading/Loading';

const LogIn = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const {
    persistedReducer: {
      user: { isLoading },
    },
  } = useSelector((state) => state);

  // const [loginError, setLoginError] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const submitForm = handleSubmit(async ({ email, password }) => {
    dispatch(loading(true));
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(userAuthenticated({ email: user.email, userId: user.uid }));
      localStorage.setItem('token', user.accessToken);
      navigate('/');
      dispatch(loading(false));
    } catch (error) {
      alert(error.message);
      // setLoginError(error);
      dispatch(loading(false));
    }
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="logIn">
          <Logo className="logo" />
          <div className="logInForm">
            <Heading text={'Login'} />
            <form className="form" onSubmit={submitForm}>
              <div className="inputField">
                <input
                  className={errors.email && 'error'}
                  {...register('email', { required: "Can't be empty" })}
                  placeholder="Email"
                />
                <span>{errors.email?.message}</span>
              </div>

              <div className="inputField">
                <input
                  className={errors.password && 'error'}
                  type={'password'}
                  {...register('password', {
                    required: "Can't be empty",
                  })}
                  placeholder="Password"
                />
                <span>{errors.password?.message}</span>
              </div>

              <Button text={'Login to your account'} />
            </form>
            <p>
              Don't have an account?
              <Link className="link" to={'/signup'}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
