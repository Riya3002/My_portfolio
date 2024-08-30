import { FaUserAstronaut } from 'react-icons/fa'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Aboutbtn(
){
    return(
        <Link  href="../skills" >          
            <div className={styles.btn}>
                <FaUserAstronaut className={styles.icon}/>
                <p className={styles.text}>My skills</p>
            </div>
        </Link>    
    )
}
