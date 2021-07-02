import React from 'react';
import { useSelector } from 'react-redux';

function CartQtyItems() {
  const cartItems = useSelector((state) => state.cartReducer);

  return (
    <div>
      <span>
        Total price:{' '}
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
    </div>
  );
}

export default CartQtyItems;
