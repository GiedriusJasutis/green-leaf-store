import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../routes';
import CartLink from './CartLink';

const styles = {
  linkStyles:
    'rounded-full hover:bg-green-900 p-2 transition ease-out duration-500',
};

function NavbarLinks() {
  return (
    <ul className='hidden md:flex flex-col md:flex-row'>
      <li className='mr-2'>
        <Link to={routes.home} className={styles.linkStyles}>
          Home
        </Link>
      </li>
      <li>
        <Link to={routes.trees} className={styles.linkStyles}>
          Trees
        </Link>
      </li>
      <li>
        <Link to={routes.login} className={styles.linkStyles}>
          Login
        </Link>
      </li>
      <li>
        <Link to={routes.signup} className={styles.linkStyles}>
          Signup
        </Link>
      </li>
      <CartLink />
    </ul>
  );
}

export default NavbarLinks;
