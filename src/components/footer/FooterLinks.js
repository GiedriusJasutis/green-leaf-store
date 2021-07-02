import React from 'react';
import LinksList from './FooterLinksList';
import { routes } from './../../routes';

function FooterLinks() {
  return (
    <section className='flex flex-col md:flex-row w-full justify-center md:justify-around'>
      {/* About Us */}
      <div className=' p-2 h-full'>
        <LinksList list={[routes.howWeWork, routes.location, routes.contactUs]}>
          About Us
        </LinksList>
      </div>

      {/* Educational Info */}
      <div className=' p-2 h-full'>
        <LinksList
          list={[
            routes.howToStart,
            routes.guides,
            routes.blog,
            routes.fastGrowingTree,
            routes.onlineEducation,
          ]}
        >
          Educational Info
        </LinksList>
      </div>

      {/* Legal */}
      <div className=' p-2 h-full'>
        <LinksList
          list={[
            routes.termsAndConditions,
            routes.privacyPolicy,
            routes.disclaimer,
          ]}
        >
          Legal
        </LinksList>
      </div>
    </section>
  );
}

export default FooterLinks;
