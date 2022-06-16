import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.scss';

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h2>
        This page does not exist, go back to{' '}
        <Link to={'/'} className="link">
          Home page
        </Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
