import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../assets/css/Projects.css';
import Transitions from '../components/Transitions';
import Marquee from 'react-fast-marquee';
import bulbasaur from '../assets/images/bulbasaur.gif';
import fontface from '../assets/images/font-face-logo-square.png';
import pixelbot from '../assets/images/pixelbot-robo.gif';
import bglogo from '../assets/images/bg-logo.svg';

const Projects = () => {
  const navigate = useNavigate();

  const images = [
    {
      name: 'poke-api',
      src: bulbasaur,
      desc: 'Gen I + II Pokedex built using React and the PokeAPI',
    },
    {
      name: 'chatbot',
      src: pixelbot,
      desc: 'Chatbot built to help user decide on a tattoo style',
    },
    {
      name: 'font-face',
      src: fontface,
      desc: 'Webstore built to test Stripe integration',
    },
    {
      name: 'black garlic furniture',
      src: bglogo,
      desc: 'Webstore proof of concept using Framer Motion and Spline for interactive UX',
    },
  ];

  const Images = images.map((image, index) => {
    return (
      <div className='image-container' key={index}>
        <img
          className='scroll-img'
          id={image.name}
          src={image.src}
          alt={image.desc}
        />
        <h1 className='project-name'>{image.name}&nbsp;&uarr;</h1>
      </div>
    );
  });

  console.log(Images[0].props.children[0].props.alt);
  console.log(Images[1].props.children[0].props.alt);
  console.log(Images[2].props.children[0].props.alt);
  console.log(Images[3].props.children[0].props.alt);

  return (
    <>
      <Transitions>
        <div
          className='projects-wrapper'
          style={{ backgroundColor: '#ece9eb' }}
        >
          <div className='float float-no-invert'>
            <h1
              style={{ color: '#0e080b', border: 'none' }}
              className='back'
              onClick={() => navigate(-1)}
            >
              back
            </h1>
          </div>
          <div className='blur float-projects center-float'>
            <div className='project-link-wrapper'>
              <a
                className='contact-item'
                target='_blank'
                rel='noreferrer'
                href='https://poke-gen.onrender.com/'
              >
                <h1 className='ext-link'>poke-api</h1>
              </a>
              <p className='project-desc'>
                {Images[0].props.children[0].props.alt}
              </p>
            </div>
            <div className='project-link-wrapper'>
              <a
                className='contact-item'
                target='_blank'
                rel='noreferrer'
                href='https://build-a-chatbot-wwl8.onrender.com/'
              >
                <h1 className='ext-link'>chatbot</h1>
              </a>
              <p className='project-desc'>
                {Images[1].props.children[0].props.alt}
              </p>
            </div>
            <div className='project-link-wrapper'>
              <a
                className='contact-item'
                target='_blank'
                rel='noreferrer'
                href='https://react-online-shop.onrender.com/'
              >
                <h1 className='ext-link'>font-face</h1>
              </a>
              <p className='project-desc'>
                {Images[2].props.children[0].props.alt}
              </p>
            </div>
            <div className='project-link-wrapper'>
              <a
                className='contact-item'
                target='_blank'
                rel='noreferrer'
                href='https://black-garlic-furniture.onrender.com/'
              >
                <h1 className='ext-link'>bgf</h1>
              </a>
              <p className='project-desc'>
                {Images[3].props.children[0].props.alt}
              </p>
            </div>
          </div>
          <div className='scroll-wrapper'>
            {/* <Marquee autoFill='true' pauseOnHover='true'>
              {Images}
            </Marquee> */}
            {Images}
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Projects;
