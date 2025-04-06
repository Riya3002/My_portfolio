"use client";
import React from "react";
import styles from "./styles.module.css";
export default function Work() {
  return (
    <>
      <section className={styles.timeline}>
        <div className={styles.heading}>Work Experience</div>
        <div className={styles.demoCardWrapper}>
          <div className={`${styles.demoCard} ${styles.step1}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>Jan 2025 - Present</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>Firmware Development Intern</div>{" "}
                Illuminify Technologies Pvt. Ltd. (AccioRobotics)
              </div>
            </div>
            <div className={styles.body}>
              <h1 className={styles.leader}> </h1>
              <p className={styles.leader}>
                •Developed and optimized firmware for STM32H7-based control
                systems, integrating multiple communication protocols, including
                RS485, CAN, MQTT, and Ethernet for multi slave communications.
              </p>
              <p className={styles.leader}>
                •Designed and assembled custom PCBs for embedded systems,
                including schematic design, and PCB layout. Performed soldering
                and debugging of hardware prototypes.
              </p>
              <p className={styles.leader}>
                •Implemented Over-the-Air firmware update mechanisms for STM32
                and USR EG118. Developed a diagnostic model to improve fault
                detection and system reliability.
              </p>
            </div>
          </div>
          <div className={`${styles.demoCard} ${styles.step2}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>July2024 - Aug2024</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>
                  Semiconductor Manufactruing Trainee
                </div>{" "}
                National Tsing Hua University, Taiwan
              </div>
            </div>
            <div className={styles.body}>
              <h1 className={styles.leader}> </h1>
              <p className={styles.leader}>
                • Selected for semiconductor manufacturing training held by
                TCSFT and NTHU, Taiwan among students from colleges all over
                India as a part of INDO-TAIWAN Collaborative Workforce
                Development Program
              </p>
              <p className={styles.leader}>
                • Wafer cleaning, thermal oxidation, photolithography, dry
				and wet etching, thin-film deposition and metallization. Also gained insights into TSMC’s manufacturing processes
              </p>
            </div>
          </div>
          <div className={`${styles.demoCard} ${styles.step3}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>June2024 - July2024</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>
                  Semiconductor Fabrication Trainee
                </div>{" "}
                IIT Hyderabad, Hyderabad
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.leader}>
                •Chosen among the top 50 students from 1000+ applicants for
                India’s first-ever 3-phase semiconductor training in
                collaboration with Government of India.
              </p>
              <p className={styles.leader}>
                •Had hands on training in cleanrooms on the process of semiconductor
                fabrication including substrate cleaning, oxidation,
                lithography, etching, metallization. Also worked on characterization and other processes.{" "}
              </p>
            </div>
          </div>
          <div className={`${styles.demoCard} ${styles.step4}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>May 2024 - June2024</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>PCB Design Intern</div>
                Menthosa Solutions
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.leader}>
                • Utilized KiCad software to create detailed schematics and
                design PCBs for various drone components, ensuring optimal
                functionality and integration.
              </p>
              <p className={styles.leader}>
                • Specifically designed a four-layer PCB board for GPS RTK,
                incorporating the ZED-F9P module to achieve high precision in
                drone navigation and positioning.
              </p>
            </div>
          </div>
          <div className={`${styles.demoCard} ${styles.step5}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>Nov 2023 - Sep 2024</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>Vice-President</div> Jugaad
                Robotics Club, UIET
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.leader}>
                • Robotics and Electronics: Led and built various projects including nanonavigator, e-conveyer, morse code detector,
				faraday station, authentication system, line following robot
              </p>
              <p className={styles.leader}>
                • 3D Printing and Prototyping: Used Ender 3 to create custom parts for various projects, improving design and
				prototyping. Also led workshops on 3D printing, guiding peers in using it for engineering solutions.{" "}
              </p>
              <p className={styles.leader}>
                • Engagement via Tech: Developed an intuitive interface that boosted new member sign-ups by 25% and now attracts
				around 100 unique visitors each month 
              </p>
              <div className={styles.btns}>
                <button
                  className={styles.button}
                  onClick={() =>
                    (window.location.href = "https://jugaadclub.vercel.app/")
                  }
                >
                  Website Link
                </button>
                <button
                  className={styles.button}
                  onClick={() =>
                    (window.location.href = "https://github.com/Riya3002")
                  }
                >
                  Github Link
                </button>
              </div>
            </div>
          </div>

          <div className={`${styles.demoCard} ${styles.step6}`}>
            <div className={styles.head}>
              <div className={styles.numberBox}>
                <span className={styles.span}>March2023 - Sept2023</span>
              </div>
              <div className={styles.subtitle}>
                <div className={styles.small}>Project Intern</div> Design
                Innovation Centre, Panjab University{" "}
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.leader}>
                • Contributed in design and development of a fully functional
                patient specific 3D printed transradial bionic prosthetic arm,
                capable of identifying gestures to be performed, through a
                hybrid signal acquisition system with EEG cap and EMG sensors
              </p>
              <p className={styles.leader}>
                • Mentored over 30 students as summer trainer under embedded
                systems in summer training program
              </p>
              <p className={styles.leader}>
                • Also contributed in designing the DIC website using wordpress
              </p>
              <div className={styles.btns}>
                <button
                  className={styles.button}
                  onClick={() => (window.location.href = "https://dicpu.in/")}
                >
                  Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
