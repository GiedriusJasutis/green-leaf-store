import React from 'react';

const style = {
  primaryButton:
    'bg-green-700 px-4 text-sm py-2 rounded-full uppercase hover:bg-green-600 transition duration-500 ease-out text-white font-bold',
};

function Button({ children }) {
  return <button className={`${style.primaryButton}`}>{children}</button>;
}

export default Button;
