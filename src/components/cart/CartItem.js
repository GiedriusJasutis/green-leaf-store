import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './../../actions/index';

const CartItem = ({ item }) => {
  const [counter, setCounter] = useState(item.qty);
  const dispatch = useDispatch();
  return (
    <div>
      {item.qty !== 0 && (
        <div className='mb-2 border-2'>
          <h1 className='text-2xl py-2 '>{item.title}</h1>
          <div className='flex flex-col md:flex-row m-2 p-3'>
            {/* image */}
            <div className='w-60 h-60 md:h-32 md:w-1/4 flex rounded-full self-center'>
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat inline-block mb-5 rounded-xl'
                style={{
                  backgroundImage: item.backgroundUrl,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>

            {/* buttons */}
            <div className='w-full md:w-2/4 p-3 flex justify-center md:justify-start items-start'>
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
              <p className='mx-2'>{item.qty}</p>
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

            {/* prices */}
            <div className='md:w-1/4 flex justify-around pt-2'>
              <div className='pt-2'>
                <p>
                  Price <span className='font-bold'>{item.price}</span>
                </p>
                <p>
                  {item.qty} total ={' '}
                  <span className='font-bold'>
                    {(parseFloat(item.price) * parseInt(item.qty)).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className='pt-2'>{/* <Button>Delete</Button> */}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
