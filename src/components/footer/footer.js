import styles from './footer.module.css';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.briefInfo}>
          <img src="\home\NJACK logo.svg" alt="NJACK-Logo" />
          <p>
            QUES2 is the Computer Application Coding Club at ICFAI University Tripura, dedicated to fostering a community of
            passionate computer Application enthusiasts.
          </p>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/company/quest2-iut"
            >
              <BsLinkedin color="white" size={25} />
            </a>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://www.instagram.com/ques2.iut?igsh=a3BkNm52MzEzY3g0 "
            >
              <BsInstagram color="white" size={25} />
            </a>

            <a target="_blank" referrerPolicy="no-referrer" href="https://x.com/_QUES2?t=xnbgQva8MV5aOG_dk5jwPg&s=09">
              <BsTwitterX color="white" size={25} />
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <h2>DEPARTMENTS</h2>
          <ul>
            <li>
              <Link href="/departments/cp">Graphic Design</Link>
            </li>
            <li>
              <Link href="/departments/dev-os">Dev & OS</Link>
            </li>
            <li>
              <Link href="/departments/ml">AI/ML</Link>
            </li>
            <li>
              <Link href="/departments/cyber-security">Content Creation</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>RESOURCES</h2>
          <ul>
            <li>
              <Link href="/resources/cp">Graphic Design</Link>
            </li>
            <li>
              <Link href="/resources/dev-os">Dev & OS</Link>
            </li>
            <li>
              <Link href="/resources/ml">AI/ML</Link>
            </li>
            <li>
              <Link href="/resources/cyber-security">Content Creation</Link>
            </li>
          </ul>
        </div>
        <div className={styles.map}>
          <h2>VISIT OUR CAMPUS</h2>
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116738.3005073613!2d91.22747106920487!3d23.887069302949925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f40b1e17beef%3A0x968fbf25214edf8d!2sICFAI%20University%20Tripura!5e0!3m2!1sen!2sin!4v1752440327069!5m2!1sen!2sin"
            style={{ borderRadius: '5px', marginTop: '13px' }}
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.footerEnd}>
        <span style={{ fontWeight: 100 }}>
          &copy; {new Date().getFullYear()} Copyright{' '}
          <span style={{ fontWeight: 600 }}>QUES2, ICFAI University Tripura.</span>
        </span>
        <span>Developed with ❤️ by QUES2</span>
      </div>
    </footer>
  );
};

export default Footer;
