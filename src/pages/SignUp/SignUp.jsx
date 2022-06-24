import React, { useState } from 'react';
import { Button, Heading } from '../../components';
import { useForm } from 'react-hook-form';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './signUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loading, userAuthenticated } from '../../store/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { signup } from '../../services/authService';

const SignUp = () => {
  const dispatch = useDispatch();

  const [loginError, setLoginError] = useState();

  const {
    persistedReducer: {
      user: { isLoading },
    },
  } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });
  const password = watch('password');

  const navigate = useNavigate();

  const submitForm = handleSubmit(async ({ email, password }) => {
    dispatch(loading(true));

    const { error, user } = await signup(email, password);

    if (user) {
      dispatch(userAuthenticated({ email: user.email, userId: user.uid }));
      navigate('/');
      dispatch(loading(false));
    }

    if (error) {
      setLoginError(error.code);
      dispatch(loading(false));
    }
  });

  loginError &&
    setTimeout(() => {
      setLoginError(null);
    }, 3000);

  return (
    <>
      {isLoading ? (
        <Loading text={'Logging you in'} />
      ) : (
        <div className="signUp">
          <Logo className="logo" />
          <div className="signUpForm">
            <Heading text={'Sign Up'} />
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
                    minLength: { value: 6, message: 'min length is 6' },
                  })}
                  placeholder="Password"
                />
                <span>{errors.password?.message}</span>
              </div>

              <div className="inputField">
                <input
                  className={errors.repeatPassword && 'error'}
                  type={'password'}
                  {...register('repeatPassword', {
                    required: "Can't be empty",
                    validate: {
                      value: (value) =>
                        value === password || "Doesn't match password",
                    },
                  })}
                  placeholder="Repeat Password"
                />
                <span>{errors.repeatPassword?.message}</span>
              </div>

              <Button text={'Create an account'} />
            </form>
            <p>
              Already have an account?
              <Link className="link" to={'/login'}>
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
