import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const styles = {
  linkStyles:
    'rounded-full hover:bg-green-900 p-2 transition ease-out duration-500',
};

function CartLink() {
  const cartItems = useSelector((state) => state.cartReducer);
  return (
    <li style={{ listStyleType: 'none' }}>
      <Link to={routes.cart} className={styles.linkStyles}>
        <i className='fas fa-shopping-cart'></i>{' '}
        <span className='bg-green-500 rounded-full px-1'>
          {(() => {
            let price = 0;
            cartItems.forEach((item) => {
              if (item.qty > 0) {
                price = price + item.qty;
              }
            });

            return price;
          })()}
        </span>
      </Link>
    </li>
  );
}

export default CartLink;
