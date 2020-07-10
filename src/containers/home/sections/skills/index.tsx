import React from 'react';
import classnames from 'classnames';
import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDocker,
  FaMicrosoft
} from 'react-icons/fa';

import Container from '../../../../components/container';
import styles from '../../styles.scss';

const Skills = () => (
  <Container alternate className={classnames(styles.container, styles.tech)}>
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
  </Container>
);

export default Skills;
