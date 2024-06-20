import Skills from "@/components/Skills";
import styles from './styles.module.css'
const SkillsPage: React.FC = () => {
    return (
        <div className={styles.html}>
            <div className={styles.title}>
            <div className={styles.body}>
            <Skills/>
        </div>
            </div>
        </div>
    );
};


export default SkillsPage;
