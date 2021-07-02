import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinksListItem({ item, index }) {
  return (
    <li className='pt-2 italic'>
      <Link to={item} className='capitalize hover:underline'>
        {/* IIFE */}
        {(() => {
          const newItem = item.substring(1);
          return newItem.split('-').join(' ');
        })()}
      </Link>
    </li>
  );
}

export default FooterLinksListItem;
