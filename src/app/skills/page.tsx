import Skills from "@/components/Skills";
import styles from './styles.module.css'
import Navbar from "@/components/Navbar";
const SkillsPage: React.FC = () => {
    return (
        <>
        <Navbar/>
        <div className={styles.html}>
            <div className={styles.title}>
            <div className={styles.body}>
            <Skills/>
        </div>
            </div>
        </div>
        </>
    );
};


export default SkillsPage;
