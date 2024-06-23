'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { AnimationMixer, VectorKeyframeTrack, AnimationClip, Group } from 'three';
import Model from '../Models/HeroModel/Model';
import Styles from './styles.module.css';
import ModelLoader from "@/components/Loaders/ModelLoader";
import { useMediaQuery } from 'react-responsive';

interface ContentItem {
    heading: string;
    content: string[];
}

const contentArray: ContentItem[] = [
    {   
        heading: "Click on the model", 
        content: [
            
        ] 
    },
    {   
        heading: "Website Development", 
        content: [
            'Frameworks: Reactjs, Nextjs',
            'UI: CSS, Tailwind, Figma, Canva',
            'Languages: Javascript, Typescript',
            'Database: MongoDB, MySQL',
            'Tools: Git, Github, VSCode',
            'Backend: ExpressJS, NodeJS'
        ] 
    },
    {   
        heading: "Embedded Engineering \n and Robotics", 
        content: [
            'Software: Arduino IDE,\n Thonny, Kicad, LTspice,Eclipse IDE, FreeRTOS',
            'Hardware: Microcontrollers,\n Sensors, Actuators, Communication protocols ',
            'Languages: C, Embedded C, Python'
        ]
    },
    {   
        heading:" Graphic Designing", 
        content: ['Canva','Figma','Adobe Photoshop','Adobe Illustrator']
    },
    {   
        heading: 'Development Tools', 
        content: [
            'Git',
            'Github',
            'VS Code'
        ] 
    },
    {   
        heading: "Soft Skills", 
        content: [
            'Management',
            'Leadership',
            'Delegation',
            'Analytical Thinking',
            'Public Speaking'
        ]
    },
];

function AnimatedModel({ scale, position, targetRotationAngle }: { scale: number; position: [number, number, number]; targetRotationAngle: number }) {
    const groupRef = useRef<Group>(null!);
    const mixer = useRef<AnimationMixer | null>(null);
    const [currentRotationAngle, setCurrentRotationAngle] = useState(0);
    const [action, setAction] = useState<THREE.AnimationAction | null>(null);

    useEffect(() => {
        if (groupRef.current) {
            mixer.current = new AnimationMixer(groupRef.current);

            const rotationY = new VectorKeyframeTrack('.rotation[y]', [0, 1], [currentRotationAngle, targetRotationAngle]);
            const clip = new AnimationClip('RotationAnimation', 1, [rotationY]);

            if (action) {
                action.stop();
            }

            const newAction = mixer.current.clipAction(clip);
            newAction.setLoop(THREE.LoopOnce, 1);
            newAction.clampWhenFinished = true;
            newAction.play();
            setAction(newAction);
            setCurrentRotationAngle(targetRotationAngle);

            return () => {
                newAction.stop();
                mixer.current?.stopAllAction();
                mixer.current = null;
            };
        }
    }, [targetRotationAngle]);

    useFrame((_, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return (
        <group ref={groupRef}>
            <Model scale={scale} position={position} />
        </group>
    );
}

const SkillModel: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 550px) and (max-width: 750px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 750px)' });

    const [rotationAngle, setRotationAngle] = useState(0);
    const [contentIndex, setContentIndex] = useState(0);
    const [innerContentIndex, setInnerContentIndex] = useState(0);

    let modelScale = 0.35;
    let modelPosition: [number, number, number] = [0, -1.2, 0];
    if (isMobile) {
        modelScale = 0.22;    
        modelPosition = [0, 0.3, 0];
    } else if (isTablet) {
        modelScale = 0.35;
        modelPosition = [0, -1, 0];
    }

    const handleModelClick = () => {
        const newIndex = (contentIndex + 1) % contentArray.length;
        const newRotationAngle = ((newIndex + 1) * Math.PI) / 4;

        setRotationAngle(newRotationAngle);
        setContentIndex(newIndex);
        setInnerContentIndex(0);
    };

    return (
        <div className={Styles.container} onClick={handleModelClick}>
            <div className={Styles.box} >
                <Canvas>
                    <ambientLight intensity={1.6} />
                    <hemisphereLight intensity={1} />
                    <light intensity={6} />
                    <Suspense fallback={<ModelLoader />}>
                        <AnimatedModel scale={modelScale} position={modelPosition} targetRotationAngle={rotationAngle} />
                        <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
            <div className={Styles.text}>
                <div className={Styles.heading}>{contentArray[contentIndex].heading}</div>
                <ul className={Styles.content}>
                    {contentArray[contentIndex].content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillModel;


