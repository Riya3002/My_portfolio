'use client'
import styles from './styles.module.css';
import { Text,Html } from "@react-three/drei";
export default function Loader(){
    return(
        <Html>
        <div className={styles.loader}>
            <div className={styles.scanner}>
                <span className={styles.text}>Loading...</span>
            </div>
        </div>
        </Html>
    )
}