import { Link } from 'react-router-dom';
import { routes } from './../../routes';

function Logo({ logo }) {
  return (
    <h4 className='logo text-xl px-3 md:text-2xl'>
      <Link to={routes.home}>
        <i className='fab fa-pagelines'></i> {logo}
      </Link>
    </h4>
  );
}

export default Logo;
