import React from 'react';
import FooterLinksListItem from './FooterLinksListItem';

function LinksList({ list, children }) {
  return (
    <>
      <h1 className='text-2xl'>{children}</h1>
      <ul>
        {list &&
          list.map((item, index) => {
            return <FooterLinksListItem item={item} key={item + index} />;
          })}
      </ul>
    </>
  );
}

export default LinksList;
