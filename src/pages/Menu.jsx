import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Transitions from '../components/Transitions';

import Marquee from 'react-fast-marquee';
import '../assets/css/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='menu-wrapper'>
          <div
            id='menu'
            className='float center-float'
            style={{ color: '#0e080b', border: 'none' }}
          >
            <Link className='menu-item' to='/projects'>
              <h1>projects</h1>
            </Link>
            <Link className='menu-item' to='/gallery'>
              <h1>gallery</h1>
            </Link>
            <Link className='menu-item' to='/graphics'>
              <h1>graphics</h1>
            </Link>
            <Link className='menu-item' to='/furniture'>
              <h1>furniture</h1>
            </Link>
            <Link className='menu-item' to='/3d'>
              <h1>three dee</h1>
            </Link>
            {/* <Link className='menu-item' to='/motion'>
              <h1>motion</h1>
            </Link> */}
            <Link className='menu-item' to='/costume'>
              <h1>costume</h1>
            </Link>
            <Link className='menu-item' to='/contact'>
              <h1>contact</h1>
            </Link>

            <Link className='menu-item' to='/'>
              <h1 id='menu-close'>close</h1>
            </Link>
          </div>
        </div>
        <div className='bg-text'>
          <Marquee autoFill='true'>
            <h2>graphic design&nbsp;</h2>
          </Marquee>
          <Marquee autoFill='true'>
            <h2>front-end development&nbsp;</h2>
          </Marquee>
          <Marquee autoFill='true'>
            <h2>furniture design&nbsp;</h2>
          </Marquee>
          <Marquee autoFill='true'>
            <h2>costume design&nbsp;</h2>
          </Marquee>
          <Marquee autoFill='true'>
            <h2>3d modeling&nbsp;</h2>
          </Marquee>
        </div>
      </Transitions>
    </>
  );
};

export default Menu;
