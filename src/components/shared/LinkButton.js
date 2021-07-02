import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  primaryButton:
    'inline-block bg-green-700 px-4 text-sm py-2 rounded-full mt-5 mx-10 uppercase hover:bg-green-600 transition duration-500 ease-out font-bold',
};

function Button({ children, route }) {
  return (
    <Link to={route} className={style.primaryButton}>
      {children}
    </Link>
  );
}

export default Button;
