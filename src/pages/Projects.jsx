import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../assets/css/Projects.css';
import Transitions from '../components/Transitions';
import Marquee from 'react-fast-marquee';
import bulbasaur from '../assets/images/bulbasaur.gif';
import fontface from '../assets/images/font-face-logo-square.png';
import pixelbot from '../assets/images/pixelbot-robo.gif';

const Projects = () => {
  const navigate = useNavigate();

  const images = [
    { name: 'poke-api', src: bulbasaur },
    { name: 'chatbot', src: pixelbot },
    { name: 'font-face', src: fontface },
  ];

  const Images = images.map((image, index) => {
    return (
      <div className='image-container' key={index}>
        <img
          className='scroll-img'
          id={image.name}
          src={image.src}
          alt={image.name}
        />
        <h2>{image.name}&nbsp;&uarr;</h2>
      </div>
    );
  });

  return (
    <>
      <Transitions>
        <div className='projects-wrapper'>
          <div id='projects' className='menu-container'>
            <a
              className='projects-item'
              target='_blank'
              rel='noreferrer'
              href='https://poke-gen.onrender.com/'
            >
              <h1 className='ext-link'>poke-api</h1>
            </a>
            <a
              className='projects-item'
              target='_blank'
              rel='noreferrer'
              href='https://build-a-chatbot-wwl8.onrender.com/'
            >
              <h1 className='ext-link'>chatbot</h1>
            </a>
            <a
              className='projects-item'
              target='_blank'
              rel='noreferrer'
              href='https://react-online-shop.onrender.com/'
            >
              <h1 className='ext-link'>font-face</h1>
            </a>
            <h1 className='menu-item' onClick={() => navigate(-1)}>
              back
            </h1>
          </div>
          <div className='scroll-wrapper'>
            <Marquee autoFill='true' pauseOnHover='true'>
              {Images}
            </Marquee>
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Projects;
