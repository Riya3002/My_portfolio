'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { AnimationMixer, VectorKeyframeTrack, AnimationClip, Group } from 'three';
import Model from './Model';
import Styles from './styles.module.css';
import ModelLoader from "@/components/Loaders/ModelLoader";

function AnimatedModel() {
    const groupRef = useRef<Group>(null!);
    const mixer = useRef<AnimationMixer | null>(null);

    useEffect(() => {
        if (groupRef.current) {
            mixer.current = new AnimationMixer(groupRef.current);

            // Define the animation clip
            const rotationY = new VectorKeyframeTrack('.rotation[y]', [0,10], [Math.PI/2,-Math.PI/4]);
            const clip = new AnimationClip('RotationAnimation', 10, [rotationY]);

            // Play the animation action
            const action = mixer.current.clipAction(clip);
            action.play();

            // Cleanup function to stop the animation and dispose of the mixer
            return () => {
                action.stop();
                mixer.current?.stopAllAction();
                mixer.current = null;
            };
        }
    }, []);

    // Update the mixer on each frame
    useFrame((_, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return (
        <group ref={groupRef}>
            <Model scale={0.4} position={[0, -1.5, 0]} rotation={[-0.08, 5, 0]} />
        </group>
    );
}

export default function Heromodel() {
    return (
        <div className={Styles.container}>
            <Canvas>
                <ambientLight intensity={1.6} />
                <hemisphereLight intensity={1}/>
                <light intensity={6} />
                <Suspense fallback={<ModelLoader/>}>
                    <AnimatedModel />
                    <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    );
}
