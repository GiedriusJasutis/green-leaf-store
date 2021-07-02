import React from 'react';
import PageTitle from './../shared/PageTitle';
import SubmitButton from './../shared/Button';

function Signup() {
  return (
    <div className='mt-20 container mx-auto'>
      <PageTitle>Sign Up</PageTitle>
      <SignupForm></SignupForm>
    </div>
  );
}

const SignupForm = () => (
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
      <div className='form-group mb-4'>
        <input
          type='password'
          className='border border-gray-400 py-2 px-5 w-full rounded-full font-bold outline-none'
          placeholder='Confirm Password'
        />
      </div>
      <div className='form-group mb-4'>
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  </div>
);

export default Signup;
