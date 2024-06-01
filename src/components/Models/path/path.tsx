'use client'
import React, { Suspense } from 'react';
import { ScrollControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './bg';
import CameraPositionControl from './camera';
import ModelWithAnnotations from './annotations';
import styles from './styles.module.css'
import ModelLoader from '@/components/Loaders/ModelLoader';
import {Entry} from './Model'

export default function Path() {
  return (
    <div>
      <div></div>
      <Canvas
        style={{
          background: 'radial-gradient(circle, rgba(24,117,85,1) 0%, rgba(0,0,0,1) 100%)',
          width: '100vw',
          height: '90vh',
        }}
      >
        <ambientLight intensity={1.2} />
        <ScrollControls pages={18}>
          <Suspense fallback={<ModelLoader />}>
            <Model position={[0.85, -7.0, -13]}>
              <OrbitControls enableZoom={false} enablePan={false} />
            </Model>
            <Entry position={[10,0.25,-33]} rotation={[0.3,-2,0.07]} />
            <CameraPositionControl />
            <ModelWithAnnotations />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
