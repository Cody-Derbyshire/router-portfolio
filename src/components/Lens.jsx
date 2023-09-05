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
} from '@react-three/drei';

import lens from '../assets/images/tFO_-lens-transformed.glb';
import bergenBold from '../assets/fonts/bergen/BergenSans-Bold.ttf';
import images from '../assets/images.json';

export default function LensAll() {
  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 20], fov: 17 }}
      >
        <ScrollControls damping={0.2} maxSpeed={1} pages={3}>
          <Lens>
            <Scroll>
              <Typography />
              <Images />
            </Scroll>
            <Preload />
          </Lens>
        </ScrollControls>
      </Canvas>
    </>
  );
}

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

function Images() {
  const group = useRef();
  const data = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const depth = width < 5 ? -10 : 0;
  function heightVar(num, width) {
    if (width < 5) {
      return num + 1;
    } else {
      return num;
    }
  }

  return (
    <group ref={group}>
      {images.furniture.map((image, index) => (
        <Image
          position={[index * 2.5 - 5.5, heightVar(1.5, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.graphics.map((image, index) => (
        <Image
          position={[index * 2.5 - 8, heightVar(-1, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.ThreeD.map((image, index) => (
        <Image
          position={[index * 2.5 - 5.5, heightVar(-3.5, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.furniture.map((image, index) => (
        <Image
          position={[index * 2.5 + 4.5, heightVar(-3.5, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.costume.map((image, index) => (
        <Image
          position={[index * 2.5 - 3, heightVar(-6, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.costume.map((image, index) => (
        <Image
          position={[index * 2.5 + 2, heightVar(-6, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.graphics.map((image, index) => (
        <Image
          position={[index * 2.5 - 3, heightVar(-8.5, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.graphics.map((image, index) => (
        <Image
          position={[index * 2.5 - 15.5, heightVar(-11, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.furniture.map((image, index) => (
        <Image
          position={[index * 2.5 - 3, heightVar(-13.5, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
      {images.graphics.map((image, index) => (
        <Image
          position={[index * 2.5 - 25.5, heightVar(-16, width), depth]}
          scale={[2, 2, 1]}
          url={image.src}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  );
}

function Typography() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );
  const shared = {
    font: bergenBold,
    letterSpacing: -0.1,
    color: '#0e080b',
  };
  return (
    <>
      <Text
        children='some'
        anchorX='center'
        position={[-width / 8, -height / 2.8, 6]}
        {...shared}
      />
      <Text
        children='of'
        anchorX='center'
        position={[-width / 10, -height / 0.5, 6]}
        {...shared}
      />
      <Text
        children='my'
        anchorX='right'
        position={[width / 2.5, -height * 3.5, 8]}
        {...shared}
      />
      <Text children='work' position={[0, -height * 4.644, 6]} {...shared} />
    </>
  );
}
