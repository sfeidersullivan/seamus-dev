import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

import Fatline from '../Fatline';

const numLines = 100;
const lines = new Array(numLines).fill();

const Scene = () => {
  let group = useRef();
  let theta = 0;

  // slowly rotate group around z-axis
  useFrame(() => {
    if (!group?.current?.rotation) return;
    // const delta = 5 * Math.sin(THREE.Math.degToRad((theta += 0.02)));
    group.current.rotation.set(0, 0, theta += 0.0015);
  });

  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  );
};

export default Scene;