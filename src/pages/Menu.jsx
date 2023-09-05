import { Link, useNavigate } from 'react-router-dom';
import Transitions from '../components/Transitions';

import '../assets/css/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='menu-wrapper'>
          <div id='menu' className='menu-container'>
            <Link className='menu-item' to='/projects'>
              <h1>projects</h1>
            </Link>

            <Link className='menu-item' to='/graphics'>
              <h1>graphics</h1>
            </Link>
            <Link className='menu-item' to='/furniture'>
              <h1>furniture</h1>
            </Link>
            <Link className='menu-item' to='/3d'>
              <h1>3d</h1>
            </Link>
            <Link className='menu-item' to='/motion'>
              <h1>motion</h1>
            </Link>
            <Link className='menu-item' to='/costume'>
              <h1>costume</h1>
            </Link>
            <Link className='menu-item' to='/contact'>
              <h1>contact</h1>
            </Link>
            <Link className='menu-item' to='/gallery'>
              <h1>gallery</h1>
            </Link>
            <Link className='menu-item' to='/'>
              <h1 id='menu-close'>close</h1>
            </Link>
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Menu;
