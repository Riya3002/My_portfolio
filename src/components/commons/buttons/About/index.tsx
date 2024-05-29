import { FaUserAstronaut } from 'react-icons/fa'
import styles from './styles.module.css'
export default function Aboutbtn(

){
    return(
        <div className={styles.btn}>
                <FaUserAstronaut className={styles.icon}/>
            <p className={styles.text}>About me</p>
        </div>
    )
}
