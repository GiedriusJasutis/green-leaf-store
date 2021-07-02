import React from 'react';
import LinkButton from './../shared/LinkButton';
import { routes } from './../../routes';

function Checkout() {
  return (
    <div>
      <LinkButton route={routes.home}>
        <p className='text-white'>Checkout</p>
      </LinkButton>
    </div>
  );
}

export default Checkout;
