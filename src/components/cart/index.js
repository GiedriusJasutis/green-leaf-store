import React, { useState } from 'react';
import PageTitle from './../shared/PageTitle';
import CartList from './CartList';
import TotalPrice from './TotalPrice';
import DeleteCart from './DeleteCart';
import Checkout from './Checkout';

function Cart() {
  return (
    <div className='mt-20 container mx-auto mb-64 p-1'>
      <PageTitle>Cart</PageTitle>
      <CartList></CartList>
      <TotalPrice></TotalPrice>
      <Checkout />
      <DeleteCart></DeleteCart>
    </div>
  );
}

export default Cart;
