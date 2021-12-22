import React from 'react';
import classnames from 'classnames';

// components
import Container from '../../../components/container';
import WorkHistory from '../../../components/work-history';

import work from '../work.json';

import styles from '../home.module.scss';

const createKey = (item: string, item2: string) =>
  `${item.replace(/ /g, '-')}-${item2.replace(/ /g, '-')}`;

const Work = () => (
  <Container id="work" className={classnames(styles.container, styles.work)}>
    <h2>Work History</h2>
    {work.map((work: Site.WorkHistory) => (
      <WorkHistory key={createKey(work.employer, work.role)} work={work} />
    ))}
  </Container>
);

export default Work;
