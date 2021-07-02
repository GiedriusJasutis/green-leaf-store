import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';

const CardList = () => {
  const trees = useSelector((state) => state.treesReducer);
  return (
    <div className='flex flex-wrap justify-center'>
      {trees && trees.map((item) => <CardItem item={item} key={item.id} />)}
    </div>
  );
};

export default CardList;
