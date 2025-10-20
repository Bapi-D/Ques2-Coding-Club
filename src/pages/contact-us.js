import { Header } from '@/components';
import React from 'react';
import styles from '../styles/contactus.module.css';
import Background from '@/components/Background';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitterX } from 'react-icons/bs';

const ContactUs = () => {
  const mapCenter = [25.5372633, 84.8472938];
  return (
    <>
      <Header selected={'Contact'} />
      <Background />
      <div className={styles.parentDiv}>
        <h1 style={{ marginBottom: '50px', textAlign: 'center' }}>CONTACT US</h1>
        <div className={styles.body}>
          <section className={styles.leftSection}>
            <h2>QUES2, ICFAI University Tripura</h2>
            <a href="mailto:quest.tech" style={{ color: 'gainsboro' }}>
              quest.tech
            </a>

            <br />
           
            <br />
            <p>Social Media</p>
            <div className={styles.social}>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.linkedin.com/company/quest2-iut"
              >
                <BsLinkedin color="white" />
              </a>
              <br />
              <a
                 target="_blank"
                 referrerPolicy="no-referrer"
                 href="https://www.instagram.com/ques2.iut?igsh=a3BkNm52MzEzY3g0"
              >
                <BsInstagram color="white" />
              </a>
              <br />
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://x.com/_QUES2?t=xnbgQva8MV5aOG_dk5jwPg&s=09"
              >
                <BsTwitterX color="white" />
              </a>
            </div>
          </section>
          <section className={styles.rightSection}>
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116738.3005073613!2d91.22747106920487!3d23.887069302949925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f40b1e17beef%3A0x968fbf25214edf8d!2sICFAI%20University%20Tripura!5e0!3m2!1sen!2sin!4v1752440327069!5m2!1sen!2sin"
              width="500px"
              height="500px"
              style={{ borderRadius: '5px' }}
              allowFullScreen
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
