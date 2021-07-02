import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  return (
    <div>
      <h1>
        Total price:{' '}
        {(() => {
          let price = 0;
          cartItems.forEach((item) => {
            if (item.qty > 0) {
              price = price + item.qty * item.price;
            }
          });

          return price;
        })()}
      </h1>
    </div>
  );
};

export default TotalPrice;
