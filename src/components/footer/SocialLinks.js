import React from 'react';

function SocialLinks() {
  return (
    <section className='float-right p-5'>
      <div className='flex flex-row'>
        <a href='/' className='inline-block p-4'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='/' className='inline-block p-4'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='/' className='inline-block p-4'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='/' className='inline-block p-4'>
          <i className='fab fa-youtube'></i>
        </a>
      </div>
      <div>
        <h1>Call Us: 555 0 55555</h1>
      </div>
    </section>
  );
}

export default SocialLinks;
