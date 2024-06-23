import Contact from "@/components/contactpage/Contact";
import styles from './styles.module.css'
import Navbar from "@/components/Navbar";
const Contactpage =()=>{
    return(
        <div className={styles.body}>
            <Navbar/>
            <Contact/>
        </div>
    )
}

export default Contactpage;