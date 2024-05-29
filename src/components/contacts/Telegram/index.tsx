import Link from 'next/link'
import styles from './styles.module.css'
import { FaTelegram } from 'react-icons/fa'

export default function Telegram(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <Link className={styles.icon} href="/">
                        <div className={styles.layer}>
                            <span className={styles.parts}></span>
                            <span className={styles.parts}></span>
                            <span className={styles.parts}></span>
                            <span className={styles.parts}></span>
                            <span className={`${styles.svg} ${styles.parts}`}>
                            <FaTelegram fill='white'/>
                            </span>
                        </div>
                        <div className={styles.content}>Telegram</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

