import React from 'react';
import { Heading } from '../../components/index';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './signUp.scss';

const SignUp = () => {
  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget.name, currentTarget.value);
  };
  return (
    <div className="signUp">
      <Logo className="logo" />
      <div className="signUpForm">
        <Heading text={'Sign Up'} />
        <form className="form">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={handleChange}
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
          />
          <button className="btn">Create an account</button>
        </form>
        <p>
          Already have an account? <span> Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
