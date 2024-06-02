import React from 'react';
import styles from './styles.module.css';
import Instagram from '../contacts/Instagram';
import Github from '../contacts/Github';
import Linkedin from '../contacts/Linkedin';
import Telegram from '../contacts/Telegram';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className={styles.body}>
        <div className={styles.contact}>
        <div className={styles.contactHeader}>
            <div className={styles.coText}>Contact Me</div>
        </div>
        
        <div className={styles.contactContent}>
            <div className={styles.contactForm}>
            <div className={styles.formTitle}>Send me a message</div>
            <form action="mailto:riyabansal2103@gmail.com" method="post" encType="text/plain">
                <fieldset>
                <div className={styles.formField}>
                    <input name="name" type="text" id="name" placeholder="Your Name" className={styles.name} />
                </div>
                <div className={styles.formField}>
                    <input name="email" type="email" id="email" placeholder="Your Email" className={styles.email} />
                </div>
                <div className={styles.formField}>
                    <input name="Subject" type="text"  className={styles.subject}id="subject" placeholder="Subject" />
                </div>
                <div className={styles.formField}>
                    <textarea name="message" id="message" className={styles.message}placeholder="Your Message"></textarea>
                </div>
                </fieldset>
                <div className={styles.btn}>
                    <input  type="submit" className={styles.formBtn} value="Send" />
                </div>
            </form>
            </div>
            
            <div className={styles.contactInfo}>
            <h3>Email Me At </h3>
            <Link  className={styles.mail} href="mailto:riyabansal2103@gmail.com">
                <p>riyabansal2103@gmail.com</p>
            </Link>
            <h3>Find Me On </h3>
            <div className={styles.contactLinks}>
                <Linkedin/>
                <Instagram/>
                <Github/>
                <Telegram/>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Contact;
