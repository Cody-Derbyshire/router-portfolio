import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import '../assets/css/Graphics.css';
import images from '../assets/images.json';
import Transitions from '../components/Transitions';

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

const Costume = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='graphics-wrapper'>
          <div className='float'>
            <h1 className=''>costume</h1>

            <h1 className='back' onClick={() => navigate(-1)}>
              back
            </h1>
          </div>
          <div className='graphics-gallery'>
            <Canvas
              style={{ height: '100vh' }}
              gl={{ antialias: false }}
              dpr={[1, 1.5]}
            >
              <Loader />
              <Suspense fallback={null}>
                <ScrollControls
                  damping={0.1}
                  pages={1.5}
                  distance={1}
                  maxSpeed={1}
                >
                  <Scroll>
                    <Pages />
                  </Scroll>
                </ScrollControls>
                <Preload />
              </Suspense>
            </Canvas>
          </div>
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
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      2,
      delta
    );
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
      {width > 6 && (
        <Image
          position={[-width * w, 0, 0]}
          scale={[height * h - m * 2, height * h - m * 2, 1]}
          url={urls[0]}
        />
      )}
      <Image
        position={[0, 0, 0.01]}
        scale={[height * h - m * 2, height * h - m * 2, 1]}
        url={urls[1]}
      />
      {width > 6 && (
        <Image
          position={[width * w, 0, 0]}
          scale={[height * h - m * 2, height * h - m * 2, 1]}
          url={urls[2]}
        />
      )}
    </group>
  );
}

function Pages() {
  const { width, height } = useThree((state) => state.viewport);
  console.log(width);
  return (
    <>
      <Page
        position={[0, height * 0.5, 0]}
        urls={[
          images.costume[0].src,
          images.costume[0].src,
          images.costume[0].src,
        ]}
      />

      <Page
        position={[0, -height * 0, 0]}
        urls={[
          images.costume[1].src,
          images.costume[1].src,
          images.costume[1].src,
        ]}
      />
      <Page
        position={[0, -height * 0.5, 0]}
        urls={[
          images.costume[0].src,
          images.costume[0].src,
          images.costume[0].src,
        ]}
      />
      <Page
        position={[0, -height * 1, 0]}
        urls={[
          images.costume[1].src,
          images.costume[1].src,
          images.costume[1].src,
        ]}
      />
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

export default Costume;
