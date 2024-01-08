import { useNavigate } from 'react-router-dom';
import Transitions from '../components/Transitions';
import '../assets/css/Contact.css';
import me from '../assets/images/ME.jpg';
import resume from '../assets/images/CODYDERBYSHIRE_CV_2023.pdf';

import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Preload,
  Image as ImageImpl,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
  useProgress,
} from '@react-three/drei';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='float float-no-invert'>
          <h1
            style={{ color: '#0e080b', border: 'none' }}
            className='back'
            onClick={() => navigate(-1)}
          >
            back
          </h1>
        </div>
        <div className='contact-float'>
          <div className='contact-item-wrapper'>
            <a
              className='contact-item'
              target='_blank'
              rel='noreferrer'
              href='tel:+64220725530'
            >
              <h1 className='contact-ext-link'>call me</h1>
            </a>
            <a
              className='contact-item'
              target='_blank'
              rel='noreferrer'
              href='mailto:derbyshire@outlook.co.nz'
            >
              <h1 className='contact-ext-link'>email me</h1>
            </a>
          </div>
          <div className='contact-item-wrapper'>
            <a
              className='contact-item'
              target='_blank'
              rel='noreferrer'
              href='https://codyderbyshire-cv.onrender.com'
            >
              <h1 className='contact-ext-link'>resume</h1>
            </a>
            <a
              className='contact-item'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Cody-Derbyshire'
            >
              <h1 className='contact-ext-link'>github</h1>
            </a>
          </div>
        </div>
        <div>
          <Canvas
            style={{ height: '100vh' }}
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
          >
            <Html className='contact-me-wrapper'>
              <h1 className='contact-me'>contact me!</h1>
            </Html>
            <Loader />
            <Suspense fallback={null}>
              <Pages />

              <Preload />
            </Suspense>
          </Canvas>
        </div>
      </Transitions>
    </>
  );
};

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    state.gl.setClearColor('#d8d7d7');
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width, height } = useThree((state) => state.viewport);
  const h = height < 10 ? 1.5 / 3 : 1 / 3;
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image
        position={[0, 0, 0]}
        scale={[height * h, height * h, 1]}
        url={urls[1]}
      />
    </group>
  );
}

function Pages() {
  const { width, height } = useThree((state) => state.viewport);
  console.log(width);
  return (
    <>
      <Page position={[0, 0, 0]} urls={[me, me, me]} />
    </>
  );
}

function Loader() {
  const progress = useProgress((state) => state.progress);
  if (progress !== 100) {
    return (
      <Html center wrapperClass='loader-div'>
        {progress.toFixed()}% loaded
      </Html>
    );
  }

  return null;
}

export default Contact;
