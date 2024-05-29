import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./Models/bg1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.7, 7.1, 9.5]} rotation={[-3.19, 0.0, 0]} scale={1.2}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.mesh_Material_u1_v1}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.mesh_Material_u1_v1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./Models/bg1.glb')