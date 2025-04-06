'use client'
import styles from './styles.module.css';
import { Text,Html } from "@react-three/drei";
export default function Loader(){
    return(
        <Html>
            <svg className={styles.loader} viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
            <circle
                className={styles.active}
                pathLength="360"
                fill="transparent"
                stroke-width="32"
                cx="192"
                cy="192"
                r="176"
            ></circle>
            <circle
                className={styles.track}
                pathLength="360"
                fill="transparent"
                stroke-width="32"
                cx="192"
                cy="192"
                r="176"
            ></circle>
            </svg>

        </Html>
    )
}