import Aboutbtn from '../commons/buttons/About';
import Resumebtn from '../commons/buttons/resume';
import Github from '../contacts/Github';
import Linkedin from '../contacts/Linkedin';
import Telegram from '../contacts/Telegram';
import Instagram from '../contacts/Instagram';
import styles from './styles.module.css';
const Hero = () => {
    return(
        <div className={styles.box}>
            <div className ={styles.body}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                    <div className={styles.content}>I ‘ M</div>
                        <div className={styles.name}>
                            <span>RIYA BANSAL</span>
                        </div>
                    </div>
                    <span>
                        <div className={styles.skill}>Web Developer and Embedded Engineer</div>
                    </span>
                </div>
                <div className={styles.buttons}>
                    <Aboutbtn/>
                    <Resumebtn  text={"Resume"}/>
                </div>
                <div className={styles.contacts}>
                    <Instagram/>
                    <Linkedin/>
                    <Github/>
                    <Telegram/>
                </div>
            </div>
        </div>
    )
}
export default Hero;