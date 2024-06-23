'use client';

import React, { useState, useRef } from "react";
import { Text, Plane, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import styles from "./styles.module.css";

interface AnnotationPoint {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  heading: string;
  headingposition: [number, number, number];
  headingrotation: [number, number, number];
  links?: string[];
}

const annotationPoints: AnnotationPoint[] = [
  {
    id: 1,
    position: [2.7, 1.3, 7],
    rotation: [0.1, -0.11, 0.05],
    heading: 'About',
    headingposition: [0.5, 0.4, 0],
    headingrotation: [0, -0.2, 0.04],
    links: [
      '../about'
    ]
  },
  {
    id: 2,
    position: [0, 1, 0],
    rotation: [0, -0.1, 0],
    heading: 'Skills',
    headingposition: [0.6, 0.34, 0],
    headingrotation: [0, -0.2, 0.07],
    links: [
      '../skills'
    ]
  },
  {
    id: 3,
    position: [2.4, 0.9, -5],
    rotation: [0, 0, 0],
    heading: 'Experience',
    headingposition: [0.6, 0.35, 0],
    headingrotation: [-0.1, -0.3, 0],
    links: [
      '../Projects'
    ]
  },
  {
    id: 4,
    position: [0.5, 0.5, -11],
    rotation: [0, -0.2, 0],
    heading: 'Contact',
    headingposition: [0.6, 0.3, 0],
    headingrotation: [0, -0.1, -0.01],
    links: [
      '../Contact'
    ]
  },
  {
    id: 5,
    position: [3.7, 0.3, -16],
    rotation: [0, -0.4, 0],
    heading: 'Projects',
    headingposition: [0.6, 0.4, 0],
    headingrotation: [0, 0, -0.05],
    
    links: [
      '../Projects'
    ]
  },
  {
    id: 6,
    position: [10.9, -2, -29],
    rotation: [0, -0.4, 0],
    heading: 'Resume',
    headingposition: [0.6, 3.5, 0],
    headingrotation: [0, 0, -0.07],
    links: [
      ''
    ]
  }
];

interface AnnotationProps {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  heading: string;
  headingposition: [number, number, number];
  headingrotation: [number, number, number];
  visible: boolean;
  onClick: () => void;
  links?: string[];
}

const Annotation: React.FC<AnnotationProps> = ({
  id, position, rotation, heading, headingposition, headingrotation, visible, onClick, links
}) => {
  const radius = 0.1;
  const textRef = useRef(null);

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
      
      {/* Heading Background */}
      {!links && (
        <Plane 
          position={[headingposition[0], headingposition[1], headingposition[2] - 0.01]}
          rotation={headingrotation}
          args={[2.4, 0.4]}
          material-color="black"
        />
      )}
      <Text
        position={headingposition}
        rotation={headingrotation}
        color="white"
        fontWeight={700}
        fontSize={0.32}
        anchorX={1}
        anchorY="middle"
        outlineWidth={0.02} 
        outlineColor="black"
       
        onClick={() => {
          if (links && links[0]) {
            window.open(links[0], '_self');
          }
        }}
      >
        {heading}
      </Text>
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
