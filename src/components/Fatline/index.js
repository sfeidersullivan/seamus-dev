// based off https://codepen.io/machida_yosuke/pen/aPjRjq 👏

import React, { useState, useRef } from 'react';
import { MeshLine, MeshLineMaterial } from 'three.meshline';
import { extend, Canvas, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';

extend({ MeshLine, MeshLineMaterial })
const colors3 = ['#f8e9a1', '#f76c6c', '#a8d0e6', '#374785', '#24305e'];
const colorsMinimal = ['#959595', '#e2e0d4', '#cebeb9', '#e7cac2', '#e8e8e8'];
const colors = ['lightpink', 'lightblue', 'lightgray'];

const Fatline = () => {
  const material = useRef();
  const color = colors[parseInt(colors.length * Math.random())];
  const dashRatio = 0.5 + 0.5 * Math.random();
  const dashArray = 0.1;
  const width = Math.max(0.1, 1.2 * Math.random());

  const xStart = 80, xBase = 3, xSpread = 6;
  const yStart = 20, yBase = 6, ySpread = 12;
  const zStart = -5, zBase = 20, zSpread = 10;
  // Calculate curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      xStart - 2 * xStart * Math.random(),
      yStart - 2 * yStart * Math.random(),
      zStart,
    );
    const points = new Array(30).fill().map(() => pos.add(
      new THREE.Vector3(
        xBase - Math.random() * xSpread,
        yBase - Math.random() * ySpread,
        zBase - Math.random() * zSpread,
      )
    ).clone());
    return new THREE.CatmullRomCurve3(points).getSpacedPoints(500); // 500
  })

  // Adjust offset to simulate movement
  const dashOffsetSpeed = 0.0004;
  useFrame(() => {
    if (!material?.current?.uniforms?.dashOffset) return;
    material.current.uniforms.dashOffset.value -= dashOffsetSpeed;
  })

  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        opacity={1}
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={dashArray}
        dashRatio={dashRatio}
      />
    </mesh>
  )
};

export default Fatline;