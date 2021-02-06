import React, { useState, useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three';

import resume from '../../images/resume.png';

const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  const texture2 = useLoader(TextureLoader, manStand);
  const texture3 = useLoader(TextureLoader, resume);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState(true);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!rotate || !mesh?.current?.rotation) return;
    mesh.current.rotation.y += 0.005;
    // mesh.current.rotation.x = mesh.current.rotation.y += 0.005;
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
      onClick={(event) => {
        setActive(!active);
        setRotate(!rotate);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
      {/* <dodecahedronGeometry attach="geometry" args={[1.5,0]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'grey'}> */}
      {/* <boxBufferGeometry attach="geometry" args={[3,3,3]} /> */}
      <coneGeometry attach="geometry" args={[1,1.5,3]} />
      <meshStandardMaterial map={texture3} attachArray="material" />
      <meshStandardMaterial map={texture3} attachArray="material" />
      <meshStandardMaterial map={texture3} attachArray="material" />
      <meshStandardMaterial map={texture3} attachArray="material" />
      {/* <meshStandardMaterial map={texture3} attachArray="material" />
      <meshStandardMaterial map={texture3} attachArray="material" /> */}
    </mesh>
  )
};

export default Box;
