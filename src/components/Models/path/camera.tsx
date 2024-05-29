'use client'
import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// control points for the spline path
const positionControlPoints = [

  new THREE.Vector3(1.4, 0.38, -14),
  new THREE.Vector3(1.4, 0.38, -12),
  new THREE.Vector3(1.4, 0.38, -10),
  new THREE.Vector3(1.4, 0.7, -8),
  new THREE.Vector3(1.4, 0.9, -4),
  new THREE.Vector3(1.2, 1.16, -2),
  new THREE.Vector3(1.2, 1.2, 0),
  new THREE.Vector3(1.2, 1.8, 2),
  new THREE.Vector3(1.2, 1.8, 3),
  new THREE.Vector3(1.2, 1.8, 5),
  new THREE.Vector3(1, 1.9, 7),
  new THREE.Vector3(1, 1.9, 9),
  new THREE.Vector3(1, 1.9, 10),
  new THREE.Vector3(0.8, 1.9, 11)
];

// control points for the rotation
const rotationControlPoints = [

  new THREE.Vector3(0.37, -0.1, 0),
  new THREE.Vector3(0.37, -0.1, 0),
  new THREE.Vector3(0.37, -0.1, 0),
  new THREE.Vector3(0.4, -0.1, 0),
  new THREE.Vector3(0.2, -0.1, 0),
  new THREE.Vector3(0.2, -0.1, 0),
  new THREE.Vector3(0.11, -0.22, 0),
  new THREE.Vector3(-0.05, -0.3, 0),
  new THREE.Vector3(-0.05, -0.3, 0),
  new THREE.Vector3(-0.09, -0.3, 0),
  new THREE.Vector3(-0.18, -0.3, 0),
  new THREE.Vector3(-0.18, -0.3, 0),
  new THREE.Vector3(-0.18, -0.3, 0),
  new THREE.Vector3(-0.2, -0.3, 0)
];

// Create a Catmull-Rom spline curve for position and rotation
const positionPath = new THREE.CatmullRomCurve3(positionControlPoints);
const rotationPath = new THREE.CatmullRomCurve3(rotationControlPoints);

export default function CameraPositionControl() {
  const scroll = useScroll();
  const { camera } = useThree();
  
  useFrame(() => {
    const offset = 1 - scroll.offset;
    scroll.damping = 10;

    // Get the position along the spline
    const position = positionPath.getPointAt(offset);
    const rotation = rotationPath.getPointAt(offset);

    // Set the camera position
    camera.position.copy(position);

    // Set the camera rotation
    camera.rotation.set(rotation.x, rotation.y, rotation.z);
  });

  return null;
}
