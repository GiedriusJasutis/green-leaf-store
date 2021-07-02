import React from 'react';
import LinkButton from './../shared/LinkButton';

function PageNotFound() {
  return (
    <div className='mt-32'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-6xl mb-5'>OOPS!</h1>
          <p>Error: 404 : Page Not Found</p>
        </div>
        <div>
          <LinkButton route='/'>Home page</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
