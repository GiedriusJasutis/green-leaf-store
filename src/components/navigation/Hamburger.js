import HamburgerMenu from './../shared/svg/HamburgerMenu';

function Hamburger({ showHamburgerMenu, menuHandler }) {
  return (
    <div className='md:hidden absolute top-0 left-0 w-full'>
      {showHamburgerMenu && (
        <button
          className='float-right p-4'
          //menuHandler first param is true hide hamburger menu when click event
          //menuHandler second param is false show mobile navigation when click event
          onClick={() => menuHandler(true, false)}
        >
          {/* svg */}
          <HamburgerMenu />
        </button>
      )}
    </div>
  );
}

export default Hamburger;
