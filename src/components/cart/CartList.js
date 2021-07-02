import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const cartItems = useSelector((state) => state.cartReducer);

  return (
    <div>{cartItems && cartItems.map((item) => <CartItem item={item} />)}</div>
  );
};

export default CartList;
