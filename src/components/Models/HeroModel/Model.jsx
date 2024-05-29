'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./Models/projectorscene.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-2.609, -0.57, -1.764]} rotation={[0.133, 0.239, -0.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface198_EyePlants1_0.geometry}
          material={materials.EyePlants1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface199_EyePlants1_0.geometry}
          material={materials.EyePlants1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PeacockPlant1_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Peacock1_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PeacockPlant4_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface105_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface107_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
        position={[3.649, -0.352, -1.033]}
        scale={1.549}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface108_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
        position={[3.764, -0.188, -0.876]}
        scale={1.549}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface256_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface197_EyePlants1_0.geometry}
        material={materials.EyePlants1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface128_BigMushrooms_0.geometry}
        material={materials.BigMushrooms}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface129_BigMushrooms_0.geometry}
        material={materials.BigMushrooms}
        position={[-3.666, 0, 7.341]}
        rotation={[0, 1.449, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface151_Rocks_0.geometry}
        material={materials.Rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface154_Rocks_0.geometry}
        material={materials.Rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface155_Rocks_0.geometry}
        material={materials.Rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface156_Rocks_0.geometry}
        material={materials.Rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface160_Rocks_0.geometry}
        material={materials.Rocks}
        position={[-3.469, 0, -2.562]}
        rotation={[0, 0.585, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface334_Rocks_0.geometry}
        material={materials.Rocks}
        position={[0.731, 0, 8.634]}
        rotation={[0, -1.416, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface162_ground1_0.geometry}
        material={materials.ground1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pealeaf3_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere13_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
        position={[-1.404, 2.094, -1.844]}
        scale={0.703}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pealeaf1_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pealeaf5_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tentacle_LP1_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pealeaf4_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pealeaf2_LP_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlienRock1_LP_Rocks2_0.geometry}
        material={materials.Rocks2}
        position={[-0.626, -0.247, 0.026]}
        rotation={[-Math.PI, 1.471, -Math.PI]}
        scale={0.991}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlienRock2__LP_Rocks2_0.geometry}
        material={materials.Rocks2}
        position={[0, -0.076, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mushy1_LP_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mushy2_LP_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Biig_LP_BigMushrooms_0.geometry}
        material={materials.BigMushrooms}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rocks_LP_Rocks_0.geometry}
        material={materials.Rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlienRock2__LP1_Rocks2_0.geometry}
        material={materials.Rocks2}
        position={[-1.621, 0.268, 0.941]}
        rotation={[0, 0.313, -0.079]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mushy2_LP1_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
        position={[-2.169, 0.526, 0.985]}
        rotation={[-0.064, -0.325, 0.228]}
        scale={0.622}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mushy2_LP2_Mushrooms1_0.geometry}
        material={materials.Mushrooms1}
        position={[-0.593, 0.577, 2.416]}
        rotation={[-0.137, 0.404, -0.174]}
        scale={0.885}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface290_grass_0.geometry}
        material={materials.grass}
        position={[-12.622, 0.055, -3.055]}
        rotation={[0.075, 0.967, -0.075]}
        scale={[-1.376, 1.376, 1.376]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface295_grass_0.geometry}
        material={materials.grass}
        position={[-4.593, -0.602, 18.474]}
        rotation={[-3.107, -0.183, -3.11]}
        scale={2.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface313_grass_0.geometry}
        material={materials.grass}
        position={[-9.735, -0.333, 1.43]}
        rotation={[-0.071, 1.222, 0.081]}
        scale={[-0.851, 0.851, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface327_grass_0.geometry}
        material={materials.grass}
        position={[-7.36, 0.081, 6.091]}
        rotation={[-Math.PI, 0.149, -Math.PI]}
        scale={1.623}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface328_grass_0.geometry}
        material={materials.grass}
        position={[-2.491, 2.006, 10.834]}
        rotation={[3, 0.193, -3.06]}
        scale={2.262}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface329_grass_0.geometry}
        material={materials.grass}
        position={[-7.341, 0.547, -8.254]}
        rotation={[0.105, 0.68, -0.043]}
        scale={[-0.727, 0.727, 0.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface330_grass_0.geometry}
        material={materials.grass}
        position={[-2.574, 0.329, -4.364]}
        rotation={[0.082, -0.129, 0.034]}
        scale={[-0.576, 0.576, 0.576]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface331_grass_0.geometry}
        material={materials.grass}
        position={[4.816, 0.329, -1.112]}
        rotation={[0.082, -0.129, 0.034]}
        scale={[-0.576, 0.576, 0.576]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface332_grass_0.geometry}
        material={materials.grass}
        position={[7.848, -0.361, -4.085]}
        rotation={[-0.03, -0.648, -0.003]}
        scale={[-0.851, 0.851, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface333_grass_0.geometry}
        material={materials.grass}
        position={[-1.528, -1.056, 1.494]}
        rotation={[-3.011, -0.224, -3.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface347_grass_0.geometry}
        material={materials.grass}
        position={[-7.8, -0.057, -1.157]}
        rotation={[0.025, 1.002, 0.062]}
        scale={[-0.576, 0.576, 0.576]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface348_grass_0.geometry}
        material={materials.grass}
        position={[-4.328, 0.101, 1.071]}
        rotation={[0.043, 0.8, 0.048]}
        scale={[-0.576, 0.576, 0.576]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder34_DroneBase_0.geometry}
        material={materials.DroneBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder34_mesh1_0.geometry}
        material={materials.mesh1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder34_scout_dronelambert3_0.geometry}
        material={materials.scout_dronelambert3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder34_Light_0.geometry}
        material={materials.Light}
        scale={0.72}
        // Light={13}
        rotation={[-0.1,0,-0.1]}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface204_EyePlants1_0.geometry}
        material={materials.EyePlants1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface207_EyePlants1_0.geometry}
        material={materials.EyePlants1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface219_EyePlants1_0.geometry}
        material={materials.EyePlants1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface220_EyePlants1_0.geometry}
        material={materials.EyePlants1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface255_LeafPlants_0.geometry}
        material={materials.LeafPlants}
        position={[0.55, 0, 1.113]}
        rotation={[0, 0.196, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fmid1_LP_LeafPlants_0.geometry}
        material={materials.LeafPlants}
        position={[6.904, 0.411, -3.994]}
        rotation={[0.006, -0.316, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface264_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
        position={[-0.044, 1.115, -1.806]}
        rotation={[0, 0.239, 0]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere15_PeacockPlant_0.geometry}
        material={materials.PeacockPlant}
        position={[-0.002, 0, 2.51]}
        rotation={[0, 1.126, 0]}
      />
    </group>
  )
}

useGLTF.preload('./Models/projectorscene.glb')