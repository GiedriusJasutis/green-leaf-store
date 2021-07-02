import React from 'react';

function PageTitle({ children }) {
  return (
    <div className='w-full md:border-b-2 border-gray-800 mb-5'>
      <h1 className='text-2xl text-center md:text-left  md:text-5xl font-bold text-gray-800 mb-2 uppercase'>
        {children}
      </h1>
    </div>
  );
}

export default PageTitle;
