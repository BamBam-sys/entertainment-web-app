import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import {
  loading,
  selectLoadingState,
  userAuthenticated,
} from '../../store/userSlice';
import { Button, Heading } from '../../components';
import Loading from './../../components/Loading/Loading';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './logIn.scss';
import { login } from '../../services/authService';

const LogIn = () => {
  const dispatch = useDispatch();
  // const auth = getAuth();
  const state = useSelector((state) => state);
  const loadingState = selectLoadingState(state);

  const [loginError, setLoginError] = useState();

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

    const { error, user } = await login(email, password);

    if (user) {
      dispatch(userAuthenticated({ email: user.email, userId: user.uid }));
      navigate('/');
      dispatch(loading(false));
    }

    if (error) {
      setLoginError(error.code);
      dispatch(loading(false));
    }

    // try {
    //   const { user } = await signInWithEmailAndPassword(auth, email, password);
    //   dispatch(userAuthenticated({ email: user.email, userId: user.uid }));
    //   localStorage.setItem('token', user.accessToken);
    //   navigate('/');
    //   dispatch(loading(false));
    // } catch (error) {
    //   setLoginError(error.code);
    //   dispatch(loading(false));
    // }
  });

  loginError &&
    setTimeout(() => {
      setLoginError(null);
    }, 3000);

  return (
    <>
      {loadingState ? (
        <Loading text={'Logging you in...'} />
      ) : (
        <div className="logIn">
          <Logo className="logo" />
          <div className="logInForm">
            <Heading text={'Login'} />
            {loginError && <span className="loginError">{loginError}</span>}
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
