import styles from './styles.module.css'
export default function Togglebtn(){
return(
    <>
    <label className={styles.bb8toggle}>
                        <input className={styles.checkbox} type="checkbox"/>
                        <div className={styles.togglecontainer}>
                            <div className={styles.scenery}>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.tattoo1}></div>
                            <div className={styles.tattoo2}></div>
                            <div className={styles.gomrassen}></div>
                            <div className={styles.hermes}></div>
                            <div className={styles.chenini}></div>
                            <div className={styles.cloud}></div>
                            <div className={styles.cloud}></div>
                            <div className={styles.cloud}></div>
                            </div>
                            <div className={styles.bb8}>
                            <div className={styles.bb8headcontainer}>
                                <div className={styles.antenna}></div>
                                <div className={styles.antenna}></div>
                                <div className={styles.head}></div>
                            </div>
                            <div className={styles.bb8body}></div>
                            </div>
                            <div className={styles.artificialhidden}>
                            <div className={styles.bb8shadow}></div>
                            </div>
                        </div>
                    </label>
    </>
)
}