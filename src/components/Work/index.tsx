'use client'
import React from "react"
import styles from './styles.module.css'
export default function Work() {
    return(
    <>
    <section className={styles.timeline}>
	<div className={styles.heading}>Work Experience</div>
	<div className={styles.demoCardWrapper}>
	<div className={`${styles.demoCard} ${styles.step1}`}>
			<div className={styles.head}>
				<div className={styles.numberBox}>
					<span className={styles.span}>Jun2024 - Aug2024</span>
				</div>
				<div className={styles.subtitle}><div className={styles.small}>Semiconductor Manufactruing Trainee</div> National Tsing Hua University, Taiwan</div>
			</div>
			<div className={styles.body}>
			<h1 className={styles.leader}> </h1>
                <p className={styles.leader}>• Selected for semiconductor manufacturing training held by TCSFT and NTHU, Taiwan among students from colleges all over India as a part of INDO-TAIWAN Collaborative Workforce Development Program</p>
                <p className={styles.leader}>• Had hands on training on the process of semiconductor fabrication including substrate cleaning, oxidation,
				lithography, etching, metallization, etc</p>	


			</div>
		</div>
		<div className={`${styles.demoCard} ${styles.step2}`}>
			<div className={styles.head}>
				<div className={styles.numberBox}>
					<span className={styles.span}>Oct2023</span>
				</div>
				<div className={styles.subtitle}><div className={styles.small}>Semiconductor Fabrication Trainee</div> IIT Hyderabad, Hyderabad</div>
			</div>
			<div className={styles.body}>
                <p className={styles.leader}>• Selected for a three phase semiconductor manufacturing training in collaboration with GoI among top 50 students all over India</p>
                <p className={styles.leader}>• Worked on the instruments and machinery to fabricate different components from silicon wafers  </p>
              
			</div>
		</div>
        <div className={`${styles.demoCard} ${styles.step3}`}>
			<div className={styles.head}>
				<div className={styles.numberBox}>
					<span className={styles.span}>May2023-Present</span>
				</div>
				<div className={styles.subtitle}>
                    <div className={styles.small}>PCB Design Intern</div>
                     Menthosa Solutions
                </div>

			</div>
			<div className={styles.body}>
	            <p className={styles.leader}>• Utilized KiCad software to create detailed schematics and design PCBs for various drone components, ensuring optimal functionality and integration.</p>
	            <p className={styles.leader}>• Specifically designed a four-layer PCB board for GPS RTK, incorporating the ZED-F9P module to achieve high precision in drone navigation and positioning.</p>
			</div>
		</div>
		<div className={`${styles.demoCard} ${styles.step4}`}>
			<div className={styles.head}>
				<div className={styles.numberBox}>
					<span className={styles.span}>Oct2023-Present</span>
				</div>
				<div className={styles.subtitle}><div className={styles.small}>Vice-President</div> Jugaad Robotics Club, UIET</div>
			</div>
			<div className={styles.body}>
				<p  className={styles.leader}>• Led and built various projects including nanonavigator, econveyer belt, morse code detector, wireless EV charging station, authentication system, line following robot</p>
				<p  className={styles.leader}>• Event Management- organised various inter college and intra college events and competitions </p>
				<p  className={styles.leader}>• Lead Designer and Developer of website of The club</p>
                <div className={styles.btns}>
                    <button className={styles.button} onClick={() => window.location.href = 'https://jugaadclub.vercel.app/'}>Website Link</button>
                    <button className={styles.button} onClick={() => window.location.href = 'https://github.com/Riya3002'}>Github Link</button>
                </div>
			</div>
		</div>

		<div className={`${styles.demoCard} ${styles.step5}`}>
			<div className={styles.head}>
				<div className={styles.numberBox}>
					<span className={styles.span}>March2023 - Sept2023</span>
				</div>
				<div className={styles.subtitle}><div className={styles.small}>Project Intern</div> Design Innovation Centre, Panjab University </div>
			</div>
			<div className={styles.body}>
				<p className={styles.leader}>• Contributed in design and development of a fully functional patient specific 3D printed transradial bionic prosthetic arm, capable of identifying gestures to be performed,
                through a hybrid signal acquisition system with EEG cap and EMG sensors</p>
				<p className={styles.leader}>• Mentored over 30 students as summer trainer under embedded systems in summer training program</p>
				<p  className={styles.leader}>• Also contributed in designing the DIC website using wordpress</p>
                <div className={styles.btns}>
                    <button className={styles.button} onClick={() => window.location.href = 'https://dicpu.in/'}>Website</button>
                </div>
			</div>
		</div>
	</div>
</section>
    </>)
}