import React from 'react';
import PageTitle from './../shared/PageTitle';
import SubmitButton from './../shared/Button';
import { Link } from 'react-router-dom';
import { routes } from './../../routes';

function Login() {
  return (
    <div className='mt-20 container mx-auto'>
      <PageTitle>Login</PageTitle>
      <LoginForm></LoginForm>
    </div>
  );
}

const LoginForm = () => (
  <div className='w-full max-w-xs inline'>
    <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
      <div className='form-group mb-4'>
        <input
          type='email'
          className='border border-gray-400 py-2 px-5 w-full rounded-full font-bold outline-none'
          placeholder='Email'
        />
      </div>
      <div className='form-group mb-4'>
        <input
          type='password'
          className='border border-gray-400 py-2 px-5 w-full rounded-full font-bold outline-none'
          placeholder='Password'
        />
      </div>
      <div className='mb-4 ml-2'>
        <NotYetRegistered />
      </div>
      <div className='form-group mb-4'>
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
  </div>
);

const NotYetRegistered = () => (
  <div>
    <p className='font-semibold'>
      Not yet registered?{' '}
      <Link className='text-blue-700' to={routes.signup}>
        Register
      </Link>
    </p>
  </div>
);

export default Login;
