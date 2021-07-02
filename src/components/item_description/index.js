import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import PageTitle from './../shared/PageTitle';

function ItemDescription() {
  const { id } = useParams();
  const trees = useSelector((state) => state.treesReducer);

  const [tree, setTree] = useState(null);

  useEffect(() => {
    trees.forEach((item) => {
      if (item.id === id) {
        setTree(item);
      }
    });
  });

  console.log(tree);
  return (
    <div className='mt-20 container mx-auto'>
      {tree && (
        <div className=''>
          <PageTitle>{tree.title}</PageTitle>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-60 h-60 md:h-96 md:w-1/2 flex rounded-full'>
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat inline-block mb-5 rounded-xl'
                style={{
                  backgroundImage: tree.backgroundUrl,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>

            <div className='w-full h-full p-5 self-start'>
              <div className='mb-5 flex w-32 justify-around'>
                <a href='/' className='hover:text-red-500'>
                  <i className='fas fa-heart'></i>
                </a>
                <a href='/' className='hover:text-blue-500'>
                  <i className='far fa-thumbs-up'></i>
                </a>
                <a href='/' className='hover:text-green-700'>
                  <i className='fas fa-share'></i>
                </a>
              </div>

              <div>{tree.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDescription;
