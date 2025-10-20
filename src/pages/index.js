import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { CoordCard, SubCoordCard, DeptCard, EventCard, Footer, Header } from '@/components';
import { motion } from 'framer-motion';
// import events from '@/data/events';
import departments from '@/data/departments';
import Tilt from 'react-parallax-tilt';
import DisplayLottie from '@/components/Lottie';
import Background from '@/components/Background';

export default function Home({ coords, subcoords, events }) {
  const filteredEvents = events.filter((event) => event.old === 'FALSE');

  // Hardcoded coordinator data
  const coordinators = [
    {
      name: "Bapi Deb",
      committee: "President",
      image: "/home/bapi.jpg",
      linkedin: "https://www.linkedin.com/in/bapi-deb-937308286",
      github: "https://github.com/Bapi-D",
    },
    {
      name: "Rajdeep Dhar",
      committee: "Vice President",
      image: "/home/rajdeep.jpg",
      linkedin: "https://linkedin.com/in/rajdeep",
      github: "https://github.com/rajdeep",
    },
    {
      name: "Anurag Das",
      committee: "Design Head",
      image: "/home/anurag.jpg",
      linkedin: "https://www.linkedin.com/in/anurag-das-46b680287/",
      github: "https://github.com/anurag",
    },
    {
      name: "Rajib Rudra Paul",
      committee: "Content Head",
      image: "/home/rajib.png",
      linkedin: "https://www.linkedin.com/in/rajib-rudra-paul-281a86283/",
      github: "https://github.com/",
    },
    {
      name: "Shagnik Shyam",
      committee: "Fullstack Dev",
      image: "/home/shagnik.jpg",
      linkedin: "https://www.linkedin.com/in/shagnik-shyam-46354a32a/",
      github: "https://github.com/",
    },
    {
      name: "Pritam Banik",
      committee: "Frontend Dev",
      image: "/home/pritam.jpg",
      linkedin: "https://www.linkedin.com/in/pritam-banik-5b1b39307/",
      github: "https://github.com/",
    },
    {
      name: "Gaurab Nag",
      committee: "Graphic Designer",
      image: "/home/gaurab.jpg",
      linkedin: "https://www.linkedin.com/in/gourab-nag-820547328/",
      github: "https://github.com/"
    },
    {
      name: "Krishayan Bhattacharjee",
      committee: "Backend Dev",
      image: "/home/krish.jpg",
      linkedin: "https://www.linkedin.com/in/krishayan-bhattacharjee-2b3b79210/",
      github: "https://github.com/",
    },
  ];

  return (
    <>
      <Head>
        <title>QUES2</title>
        <meta name="description" content="QUES2 is a computer application coding club of ICFAI Tripura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected={'Home'} />
      <Background />
      <div style={{ zIndex: '2', position: 'relative' }}>
        <section className={styles.heroSection}>
          <motion.div
            className={styles.njackhero}
            initial={{ opacity: 0, x: '-100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <Tilt>
              <img loading="lazy" src="/home/QUES2 logo.svg" alt="QUES2 Logo" />
            </Tilt>
            <p className={styles.subHeroText}>Not just another Computer Application Klub</p>
          </motion.div>
          <motion.div
            className={styles.lottiehero}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <DisplayLottie animationPath="https://assets3.lottiefiles.com/packages/lf20_mXdqmT1SH2.json" />
          </motion.div>
        </section>
        <section className={styles.aboutSection}>
          <h2>About us</h2>
          <div>
            <motion.div
              className={styles.lottiehero}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <DisplayLottie animationPath="https://assets1.lottiefiles.com/packages/lf20_v1yudlrx.json" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: '100%' }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
             QUES2 is the official Coding Club of the Department of Computer Application at ICFAI University Tripura.
             We are a passionate community of programmers, developers, and tech enthusiasts.
             Our mission is to foster innovation, collaboration, and continuous learning in the tech space.
             From coding competitions and hackathons to hands-on workshops and project showcases — we do it all.
             QUES2 provides a platform for students to build real-world skills and explore emerging technologies.
             We believe in learning by doing, and support both beginners and advanced coders alike.
             Regular events, tech talks, and mentorship sessions keep our members actively engaged.
             The club promotes leadership, teamwork, and creative thinking through collaborative activities.
             We aim to bridge the gap between academics and industry-ready skills.
             Our inclusive environment welcomes anyone curious about coding and technology.
             QUES2 is where ideas turn into projects, and passion turns into purpose.
             Join us and be part of a community that's building the future — one line of code at a time.
            </motion.p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Upcoming Events</h2>
          <div className={styles.cardSection}>
            {filteredEvents.map((event, index) => (
              //   {event.old === false && (
              <motion.div
                className={styles.card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
              >
                <EventCard
                  key={event.key}
                  old={event.old}
                  eventName={event.eventName}
                  desc={event.desc}
                  image={event.image}
                  registerLink={event.registerLink}
                />
              </motion.div>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Departments</h2>
          <div className={styles.cardSection}>
            {departments.map((dept, index) => (
              <motion.div
                className={styles.card}
                key={dept.deptName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
              >
                <DeptCard
                  deptName={dept.deptName}
                  deptImage={dept.deptImage}
                  deptDesc={dept.deptDesc}
                  deptLink={dept.deptLink}
                  bgColor={dept.bgColor}
                />
              </motion.div>
            ))}
          </div>
        </section>
        <section className={styles.section} style={{ width: '100%' }}>
          <h2 className={styles.sectionHeading}>Our Team</h2>
          <h3>Coordinators</h3>
          <div className={styles.cardSection} style={{ flexWrap: 'nowrap', justifyContent: 'center', gap: '25px' }}>
            {coordinators.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.name}
                className={styles.card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
              >
                <CoordCard
                  coordName={member.name}
                  coordImage={member.image}
                  coordCommittee={member.committee}
                  coordLinkedIn={member.linkedin}
                  coordGitHub={member.github}
                />
              </motion.div>
            ))}
          </div>
          <div className={styles.cardSection} style={{ gap: '10px' }}>
            {coordinators.slice(4).map((member, index) => (
              <motion.div
                key={member.name}
                className={styles.card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
              >
                <CoordCard
                  coordName={member.name}
                  coordImage={member.image}
                  coordCommittee={member.committee}
                  coordLinkedIn={member.linkedin}
                  coordGitHub={member.github}
                  coordCFHandle={member.cfhandle}
                />
              </motion.div>
            ))}
          </div>

        </section>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            alt="TeamWork"
            src="\home\team.png"
            style={{
              marginInline: '5%',
              maxWidth: '90vw',
              maxHeight: '25vh',
              objectFit: 'contain'
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
