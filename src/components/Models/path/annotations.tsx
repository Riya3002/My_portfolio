'use client'
import React, { useState } from "react";
import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import styles from "./styles.module.css";

interface AnnotationPoint {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  heading: string;
  content: string[];
  contentBasePosition: [number, number, number];
  headingposition: [number, number, number];
  headingrotation: [number, number, number];
  links?: string[];
}

const annotationPoints: AnnotationPoint[] = [
  {
    id: 1,
    position: [2.7, 1.3, 8.5],
    rotation: [0.1, -0.12, 0.05],
    heading: 'Website Development',
    contentBasePosition: [0.2, 1, 0],
    headingposition: [1, 1.3, -0.21],
    headingrotation: [0, -0.2, 0.04],
    content: [
      'Frameworks: Reactjs, Nextjs',
      'UI: CSS, Tailwind, Figma, Canva',
      'Languages: Javascript, Typescript, Python',
      'Database: MongoDB, MySQL',
      'Tools: Github, VSCode',
      'Backend: ExpressJS, NodeJS'
    ]
  },
  {
    id: 2,
    position: [-0, 1, 1.2],
    rotation: [0, -0.1, 0],
    heading: 'Embedded Engineering and Robotics',
    contentBasePosition: [-0.7, 0.6, 0],
    headingposition: [0.2, 0.9, 0],
    headingrotation: [0, -0.2, 0.07],
    content: [
      'Software: Arduino IDE, Thonny, Kicad,LTspice',
      'Hardware: Microcontrollers,Sensors, Actuators,Buck-Boost Converters'
    ]
  },
  {
    id: 3,
    position: [2.4, 0.9, -3],
    rotation: [0, 0, 0],
    heading: 'Graphic Designing',
    contentBasePosition: [0.2, 0.45, 0],
    headingposition: [1, 0.7, 0],
    headingrotation: [-0.1, -0.3, 0],
    content: [
      'Canva',
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ]
  },
  {
    id: 4,
    position: [0.5, 0.5, -8],
    rotation: [0, -0.2, 0],
    heading: 'Development Tools',
    contentBasePosition: [0.3, 0.5, 0],
    headingposition: [0.9, 0.7, 0],
    headingrotation: [0, -0.1, -0.01],
    content: [
      'Git',
      'Github',
      'VS Code',
    ]
  },
  {
    id: 5,
    position: [3.5, 0.3, -13],
    rotation: [0, -0.4, 0],
    heading: ' Soft Skills',
    contentBasePosition: [0.2, 0.5, 0],
    headingposition: [1, 0.7, 0],
    headingrotation: [0, 0, -0.05],
    content: [
      'Management',
      'Leadership',
      'delegation',
      'Analytical Thinking',
      'Public Speaking'
    ]
  },
  {
    id: 6,
    position: [10.9, -2, -29],
    rotation: [0, -0.4, 0],
    heading: 'Experience',
    contentBasePosition: [0, 3.3, 0],
    headingposition: [0.9, 3.5, 0],
    headingrotation: [0, 0, -0.07],
    content: [
      ' click here for' ,'work experience ' ,'and projects'
    ],
    links: [
      '../Projects'
    ]
  }
];

interface AnnotationProps {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  heading: string;
  content: string[];
  contentBasePosition: [number, number, number];
  headingposition: [number, number, number];
  headingrotation: [number, number, number];
  visible: boolean;
  onClick: () => void;
  links?: string[];
}

const Annotation: React.FC<AnnotationProps> = ({
  id, position, rotation, heading, contentBasePosition, headingposition, headingrotation, content, visible, onClick, links
}) => {
  const radius = 0.1;

  if (!visible) return null;

  return (
    <group position={position} rotation={rotation} onClick={() => onClick()}>
      <mesh>
        <circleGeometry args={[radius, 32]} />
        <meshBasicMaterial color={0x808080} />
      </mesh>
      <mesh>
        <ringGeometry args={[radius, radius + 0.01, 32]} />
        <meshBasicMaterial color={0x000000} side={2} />
      </mesh>
      <Text
        position={[0, 0, 0.01]}
        color="black"
        fontSize={0.1}
        anchorX="center"
        anchorY="middle"
      >
        {id.toString()}
      </Text>
      <Text
        position={headingposition}
        rotation={headingrotation}
        color="white"
        fontWeight={700}
        fontSize={0.18}
        anchorX={1}
        anchorY="middle"
        onClick={() => {
          if (links && links[0]) {
            window.open(links[0], '_blank');
          }
        }}
      >
        {heading}
      </Text>
      {content.map((item, index) => (
        <React.Fragment key={index}>
          <Text
            position={[
              contentBasePosition[0],
              contentBasePosition[1] - (index * 0.15),
              contentBasePosition[2] - 0.005
            ]}
            rotation={headingrotation}
            color="white"
            fontSize={0.09}
            fontWeight={500}
            anchorX="left"
            anchorY="middle"
            onClick={() => {
              if (links && links[index]) {
                window.open(links[index], '_blank');
              }
            }}
          >
            {item}
          </Text>
        </React.Fragment>
      ))}
    </group>
  );
};

const ModelWithAnnotations: React.FC = () => {
  const [selectedAnnotation, setSelectedAnnotation] = useState<number | null>(null);
  const [visibleAnnotations, setVisibleAnnotations] = useState<boolean[]>(new Array(annotationPoints.length).fill(false));
  const scroll = useScroll();

  const handleAnnotationClick = (id: number) => {
    setSelectedAnnotation(id);
  };

  useFrame(() => {
    const scrollOffset = scroll.offset * 10;
    const newVisibleAnnotations = annotationPoints.map((point, index) => {
      return scrollOffset >= index;
    });
    setVisibleAnnotations(newVisibleAnnotations);
  });

  return (
    <>
      {annotationPoints.map((point, index) => (
        <Annotation
          key={point.id}
          id={point.id}
          heading={point.heading}
          position={point.position}
          rotation={point.rotation}
          content={point.content}
          contentBasePosition={point.contentBasePosition}
          headingposition={point.headingposition}
          headingrotation={point.headingrotation}
          visible={visibleAnnotations[index]}
          onClick={() => handleAnnotationClick(point.id)}
          links={point.links}
        />
      ))}
    </>
  );
};

export default ModelWithAnnotations;
