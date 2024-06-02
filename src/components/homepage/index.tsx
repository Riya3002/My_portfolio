import Styles from './styles.module.css'
import Heromodel from "../Models/HeroModel/hero"
import Hero from "../info"
import { Suspense } from 'react'
const Homepage =()=>{
    return(
        <div>
             <div className={Styles.container}>
                <span className={Styles.content}>
                    <Hero />
                </span>
                <div className={Styles.model}>
                    <Heromodel/>
                </div>
            </div>
        </div>
    )
}
export default Homepage;