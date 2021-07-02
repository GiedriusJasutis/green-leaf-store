import { clearCart } from './../../actions/index';
import { useDispatch } from 'react-redux';

const DeleteCart = () => {
  const dispatch = useDispatch();
  return (
    <div className='float-right mt-10 pr-5'>
      <button
        className='bg-red-700 px-4 text-sm py-2 rounded-full uppercase hover:bg-green-600 transition duration-500 ease-out text-white font-bold'
        onClick={() => dispatch(clearCart())}
      >
        Clear All Items
      </button>
    </div>
  );
};

export default DeleteCart;
