import React from 'react';
import classnames from 'classnames';

// icons
import { ReactComponent as ReactIcon } from './react.svg';
import { ReactComponent as CssIcon } from './css.svg';
import { ReactComponent as JsIcon } from './js.svg';
import { ReactComponent as NodeIcon } from './node.svg';
import { ReactComponent as DockerIcon } from './docker.svg';
import { ReactComponent as MicrosoftIcon } from './ms.svg';

import Container from '../../../../components/container';
import styles from '../../styles.scss';

const Skills = () => (
  <Container alternate className={classnames(styles.container, styles.tech)}>
    <h2>Top Skills</h2>
    <div className={styles.grid}>
      <div className={styles.column}>
        <ReactIcon />
        <span>React</span>
      </div>
      <div className={styles.column}>
        <JsIcon />
        <span>JavaScript</span>
      </div>
      <div className={styles.column}>
        <CssIcon />
        <span>CSS</span>
      </div>
      <div className={styles.column}>
        <NodeIcon />
        <span>NodeJS</span>
      </div>
      <div className={styles.column}>
        <MicrosoftIcon />
        <span>.NET Core</span>
      </div>
      <div className={styles.column}>
        <DockerIcon />
        <span>Docker</span>
      </div>
    </div>
  </Container>
);

export default Skills;
