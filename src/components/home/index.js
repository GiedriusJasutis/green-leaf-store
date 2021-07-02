import React from 'react';
import LinkButton from './../shared/LinkButton';
import { routes } from './../../routes';

import HouseSpace from './../shared/svg/HouseSpace';
import TakeCareTree from './../shared/svg/TakeCareTree';
import TreeAndLife from './../shared/svg/TreeAndLife';

function Home() {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-green-300 h-screen w-screen relative bg-forest-image bg-fixed bg-cover flex items-center justify-center text-white'>
        <div className='bg-gray-900 h-screen w-screen opacity-75 z-0 absolute'></div>
        <div className='w-full h-80 md:flex md:container md:mx-auto'>
          <div className='absolute text-center md:text-left px-5'>
            <p className='text-2xl md:text-4xl capitalize'>
              From our forest to your door!
            </p>
            <p className='text-xl md:text-2xl mt-10 capitalize'>
              order sitting on the couch and we will deliver it to you in a day!
            </p>
            <LinkButton route={routes.trees}>Order Now</LinkButton>
          </div>
          <div></div>
        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-gray-900 text-2xl md:text-4xl text-center p-3'>
          How to Order the Right Tree
        </h1>
        <div className='flex flex-col md:flex-row items-center md:justify-around mt-5 mb-5 overflow-hidden'>
          <div className='  w-64 m-5'>
            <h1 className='text-center'>
              Check how much space you have to plant a tree
            </h1>
            <HouseSpace />
          </div>
          <div className=' h-64 w-64 m-5'>
            <h1 className='text-center'>How you will take care of the tree</h1>
            <TakeCareTree />
          </div>
          <div className=' h-64 w-64 m-5'>
            <h1 className='text-center'>
              How this tree will be important to you
            </h1>
            <TreeAndLife />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
