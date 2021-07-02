import React, { useState } from 'react';
import { routes } from './../../routes';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from './../../actions/index';
import { decrement } from './../../actions/index';

const styles = {
  cardZoom:
    'relative flex items-center justify-center m-2 overflow-hidden shadow-xl w-60 h-60 rounded-2xl',
  cardZoomImage:
    'absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover',
  cardZoomHover: 'scale-110',
};

const CardItem = ({ item }) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className='w-64 md:w-80 h-80 my-5'>
      <p className='ml-5 capitalize'>{item.title}</p>
      <div className={`${styles.cardZoom}`}>
        {item.backgroundUrl ? (
          <Link
            to={`${routes.trees}/${item.id}`}
            className={`${styles.cardZoomImage} hover:${styles.cardZoomHover}`}
            style={{
              backgroundImage: item.backgroundUrl,
            }}
          >
            {' '}
          </Link>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className='flex justify-around items-center'>
        <div>
          <button
            href='/'
            className='text-2xl'
            onClick={() => {
              const newCounter = counter + 1;
              setCounter(newCounter);
              dispatch(increment({ item, qty: newCounter }));
            }}
          >
            <i className='fas fa-plus-square'></i>
          </button>
          <span className='mx-2'>{counter}</span>
          <button
            href='/'
            className='text-2xl'
            onClick={() => {
              if (counter > 0) {
                const newCounter = counter - 1;
                setCounter(newCounter);
                dispatch(decrement({ item, qty: newCounter }));
              }
            }}
          >
            <i className='fas fa-minus-square'></i>
          </button>
        </div>
        <p className='mr-5'>{item.price}€</p>
      </div>
    </div>
  );
};

export default CardItem;
