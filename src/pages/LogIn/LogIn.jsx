import React from 'react';
import { Button, Heading } from '../../components';
import { useForm } from 'react-hook-form';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './logIn.scss';

const LogIn = () => {
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const submitForm = handleSubmit(({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => console.log(response.user))
      .catch((err) => alert(err.message));
  });

  return (
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
                // minLength: { value: 6, message: 'min length is 6' },
              })}
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
          </div>

          <Button text={'Login to your account'} />
        </form>
        <p>
          Don't have an account? <span> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
