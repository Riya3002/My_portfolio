'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { AnimationMixer, VectorKeyframeTrack, AnimationClip, Group } from 'three';
import Model from './Model';
import Styles from './styles.module.css';
import Loader from "@/components/Loaders/loader";
import { useMediaQuery } from 'react-responsive';

function AnimatedModel({ scale,position }: { scale: number;position:[number,number,number]}) {
    const groupRef = useRef<Group>(null!);
    const mixer = useRef<AnimationMixer | null>(null);

    useEffect(() => {
        if (groupRef.current) {
            mixer.current = new AnimationMixer(groupRef.current);

            const rotationY = new VectorKeyframeTrack('.rotation[y]', [0,10], [Math.PI/2,-Math.PI/4]);
            const clip = new AnimationClip('RotationAnimation', 10, [rotationY]);

            const action = mixer.current.clipAction(clip);
            action.play();

            return () => {
                action.stop();
                mixer.current?.stopAllAction();
                mixer.current = null;
            };
        }
    }, []);

    useFrame((_, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return (
        <group ref={groupRef}>
            <Model scale={scale} position={position} rotation={[-0.08, 5, 0]} />
        </group>
    );
}

export default function Heromodel() {
    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 550px) and (max-width: 750px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 750px)' });

    let modelScale = 0.4;
    let modelPosition = [0, -1.5, 0];
    if (isMobile) {
        modelScale = 0.22;    
        modelPosition=[0, 0.3, 0];
    } else if (isTablet) {
        modelScale = 0.35;
        modelPosition = [0, -1, 0];
    }

    return (
        <div className={Styles.container}>
            <Canvas>
                <ambientLight intensity={1.6} />
                <hemisphereLight intensity={1}/>
                <light intensity={6} />
                <Suspense fallback={<Loader/>}>
                    <AnimatedModel scale={modelScale} position={[modelPosition[0],modelPosition[1],modelPosition[2]]} />
                    <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    );
}
