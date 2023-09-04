import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Landing.css';
import { TxtAnime } from 'txtanime.js';
import Marquee from 'react-fast-marquee';
import Transitions from '../components/Transitions';

const Landing = () => {
  useEffect(() => {
    new TxtAnime('.role-text', {
      effect: 'txt-an-7',
      delayStart: 0,
      delay: 1,
      duration: 0.15,
      repeat: true,
      overlayBackground: '#FFC716',
      text: ['designer.', 'developer.'],
    });
  }, []);

  return (
    <>
      <Transitions>
        <div className='main'>
          <div className='title-div'>
            <Link to='/'>
              <h1 className='name'>i'm cody derbyshire.</h1>
            </Link>
            <div className='change-div'>
              <p>i'm a pretty okay&nbsp;</p>
              <p className='role-text'></p>
            </div>
          </div>
          <Link to='/menu' id='menu-open' className='menu-link'>
            menu &rarr;
          </Link>
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

export default Landing;
