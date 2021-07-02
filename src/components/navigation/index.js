import React, { useState } from 'react';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
import Mobile from './Mobile';
import Hamburger from './Hamburger';
import CartLink from './CartLink';

const styles = {
  navbar:
    'fixed z-20 w-full flex flex-row md:flex-row bg-green-700 text-white md:justify-around py-4 text-lg',
};

function Navbar({ logo }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);

  // Hide hamburger menu when screen mobile
  const menuHandler = (isNavbar, isHamburgerMenu) => {
    setShowNavbar(isNavbar);
    setShowHamburgerMenu(isHamburgerMenu);
  };

  return (
    <nav className={styles.navbar}>
      <Logo logo={logo} />

      <NavbarLinks />
      <Hamburger
        showHamburgerMenu={showHamburgerMenu}
        menuHandler={menuHandler}
      />
      <div className='absolute z-20 md:hidden left-56'>
        <CartLink />
      </div>
      <Mobile showNavbar={showNavbar} menuHandler={menuHandler} />
    </nav>
  );
}

export default Navbar;
