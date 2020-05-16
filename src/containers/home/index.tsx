import React from 'react';
import {
  FaHeart,
  FaReact,
  FaMicrosoft,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
} from 'react-icons/fa';

import { ReactComponent as MeSvg } from '../../assets/me.svg';
import Container from '../../components/container';

import styles from './styles.css';

const Home = () => (
  <>
    <Container className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Hi! I&apos;m Francois.</h1>
          <h3>
            I <FaHeart /> building for the web
          </h3>
        </div>
        <div className={styles.me}>
          <MeSvg />
        </div>
      </div>
    </Container>
    <Container alternate>
      <div className={styles.tech}>
        <h2>Top Skills</h2>
        <div className={styles.grid}>
          <div className={styles.column}>
            <FaReact />
            <span>React</span>
          </div>
          <div className={styles.column}>
            <FaJsSquare />
            <span>JavaScript</span>
          </div>
          <div className={styles.column}>
            <FaCss3Alt />
            <span>CSS</span>
          </div>
          <div className={styles.column}>
            <FaNodeJs />
            <span>NodeJS</span>
          </div>
          <div className={styles.column}>
            <FaMicrosoft />
            <span>.NET Core</span>
          </div>
          <div className={styles.column}>
            <FaDocker />
            <span>Docker</span>
          </div>
        </div>
      </div>
    </Container>
    <Container className={styles.container}>
      <div id="about" className={styles.about}>
        <h2>About</h2>
        <p>
          I&apos;m a freelance software engineer with 8+ years of experience in
          developing and maintaining robust web apps.
        </p>
        <p>
          My work experience stretches across various industries, from
          structured corporate environments to dynamic and high-pressure
          environments such as tech startups and agencies.
        </p>
        <p>
          Working in these environments has enabled me to develop software which
          improves the productivity and efficiency of business processes.
        </p>
      </div>
    </Container>
  </>
);

export default Home;
