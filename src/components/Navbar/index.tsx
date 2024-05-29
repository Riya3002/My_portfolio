import NavLinks from "./navlinks";
import Link from "next/link";
import styles from "./styles.module.css"
import Togglebtn from "../commons/buttons/toggle";

const Navbar=()=>{
    return(
        <>
        <div>
            <div className={styles.navbar}>
                <div className={styles.left}>
                {NavLinks.map((link, index) => (
                    <div key={index} className={styles.links}>
                        <Link href={link.path} className={styles.link} >
                            {link.title}
                        </Link>
                    </div>
                ))}
                </div>

                <div className={styles.right}> 
                    <div className={styles.inputcontainer}>
                        <p className={styles.text}>
                            <span className={styles.user}>Riya</span><span className={styles.searchtext}>@my_portfolio</span>:<span className={styles.char}>~</span>$
                        </p>
                        <input className={styles.input} placeholder="know about me" type="text"/>
                    </div>
                    <Togglebtn/>
                </div>
            </div>
        </div>
        </>
    );

}
export default Navbar;
