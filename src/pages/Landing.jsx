import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Landing.css';
import { TxtAnime } from 'txtanime.js';
import Marquee from 'react-fast-marquee';
import Transitions from '../components/Transitions';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  ScrollControls,
  Scroll,
  useScroll,
  Preload,
  Image,
  MeshTransmissionMaterial,
  Text,
  useFBO,
  Html,
} from '@react-three/drei';

import lens from '../assets/images/tFO_-lens-transformed.glb';

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
function Lens({ children, damping = 0.5, ...props }) {
  const { nodes } = useGLTF(lens);
  const buffer = useFBO();
  const [scene] = useState(() => new THREE.Scene());
  useFrame((state, delta) => {
    state.gl.setRenderTarget(buffer);
    state.gl.setClearColor('#d8d7d7');
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });
  return (
    <>
      {createPortal(children, scene)}
      <mesh
        scale={[2, 2, 1]}
        position={[0, 0, 15]}
        rotation={[Math.PI / 2, 0, 0]}
        geometry={nodes.Cylinder.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          thickness={1}
          anisotropy={0.2}
          chromaticAberration={0.01}
          ior={1.5}
        />
      </mesh>
    </>
  );
}

export default Landing;
