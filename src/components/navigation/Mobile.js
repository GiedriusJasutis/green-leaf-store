import React from 'react';
import CloseButton from './../shared/svg/CloseButton';
import MobileLinks from './MobileLinks';

function Mobile({ showNavbar, menuHandler }) {
  //

  return (
    <div className='md:hidden absolute top-0 left-0 w-full'>
      {showNavbar && (
        <div className='relative'>
          {/* click anywere to close mobile navigation */}
          <div
            className='h-screen opacity-20 absolute top-0 left-0 w-full'
            onClick={() => menuHandler(false, true)}
          ></div>
          {/* click inside mobile navigation to close mobile navigation */}
          <div
            className='bg-green-900 opacity-95 py-5'
            onClick={() => menuHandler(false, true)}
          >
            {/* svg */}
            <CloseButton />
            <MobileLinks />
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;
