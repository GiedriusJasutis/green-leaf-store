import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../routes';

const styles = {
  linkStyles:
    'rounded-full hover:bg-green-900 transition ease-out duration-500',
};

function MobileLinks() {
  return (
    <ul className='flex flex-col items-center'>
      <li className='m-2'>
        <Link to={routes.home} className={styles.linkStyles}>
          Home
        </Link>
      </li>
      <li className='m-2'>
        <Link to={routes.trees} className={styles.linkStyles}>
          Trees
        </Link>
      </li>
      <li className='m-2'>
        <Link to={routes.login} className={styles.linkStyles}>
          Login
        </Link>
      </li>
      <li className='m-2'>
        <Link to={routes.signup} className={styles.linkStyles}>
          Signup
        </Link>
      </li>
    </ul>
  );
}

export default MobileLinks;
