import React from 'react';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <div className='bg-gray-900 md:mt-96 text-white w-full pt-4'>
      {/* Footer links takes routes array and generates footer links */}
      <FooterLinks></FooterLinks>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default Footer;
