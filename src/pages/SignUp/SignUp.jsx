import React from 'react';
import { Button, Heading } from '../../components';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './signUp.scss';

const SignUp = () => {
  const auth = getAuth();
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

  const submitForm = handleSubmit(async ({ email, password }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div className="signUp">
      <Logo className="logo" />
      <div className="signUpForm">
        <Heading text={'Sign Up'} />
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
          Already have an account? <span> Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
