'use client'
import React, { useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { Mesh } from 'three';

export function Entry(props) {
  const { nodes, materials } = useGLTF('./Models/entry.glb');

  // Create a ref for the rectangle (plane) mesh
  const planeRef = useRef(null);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Entrance}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Cave}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Lamp_Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Grass}
        />
        <mesh ref={planeRef} position={[-1, 1.5, 1]} rotation={[Math.PI / 2,Math.PI/2, 0]} >
          <planeGeometry args={[2.6, 3]} /> {/* Adjust size as needed */}
          <meshBasicMaterial color="black" /> {/* Adjust color as needed */}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('./Models/entry.glb');
