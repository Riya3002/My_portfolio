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
import Loader from "../Loaders/loader";

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
        heading: "Embedded Engineering \n and Robotics", 
        content: [
            "Languages: C, Python, Embedded C ",
            "Softwares: Kicad, FreeRTOS, Git, Github, Eclipse IDE, Thonny, Arduino IDE, STM32cube softwares, cutecom, MQTT Explorer",
            "Hardware: ICs, Circuit Design, Control System, PCB Soldering, Sensor integrations, Microcontrollers: STM32FXXXX, STM32HXXXX, ESP32, Arduino, etc.",
            "Communication Protocols - SPI, I2C, RS485, CAN, MQTT",
            "Semiconductors: Fabrication Processes, Lithography, Etching methods, Metallization, Cutting and Packaging",
        ]
    },
    {   
        heading: "Website Development", 
        content: [
            'Frameworks: Reactjs, Nextjs',
            'Languages: Javascript, Typescript',
            'Backend: ExpressJS, NodeJS',
            'Database: MongoDB, MySQL',
            'UI: CSS, Tailwind, Figma, Canva',
            'Tools: Git, Github, VSCode',
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
            'VS Code',
            'Eclipse IDE',
            'Stm32cubeIDE',
            'Arduino IDE'
        ] 
    },
    {   
        heading: "Soft Skills", 
        content: [
            'Management',
            'Leadership',
            'Delegation',
            'Analytical Thinking',
            'Public Speaking',
            'Adaptability',
            'Strategizing', 
            'Time Optimization',
            'Problem Solving'
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
                    <Suspense fallback={<Loader />}>
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


