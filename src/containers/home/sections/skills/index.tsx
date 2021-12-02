import React from 'react';
import classnames from 'classnames';
import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaMicrosoft
} from 'react-icons/fa';

import Container from '../../../../components/container';
import styles from '../../home.module.scss';

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
        <span>.NET</span>
      </div>
      <div className={styles.column}>
        <FaDatabase />
        <span>SQL</span>
      </div>
    </div>
  </Container>
);

export default Skills;
