import React from 'react';

import WorkProject from '../work-project';

import styles from './work-history.module.scss';

interface Props {
  work: Site.WorkHistory;
}

const WorkHistory = ({ work }: Props) => (
  <div className={styles.container}>
    <h4 className={styles.heading}>
      {work.employer}
      <span>{work.location}</span>
    </h4>
    <h5 className={styles.heading}>
      {work.role}
      <span className={styles.dates}>
        {work.from} - {work.to || 'present'}
      </span>
    </h5>
    <ul className={styles.projects}>
      {work.projects.map((x) => (
        <li key={x.name}>
          <WorkProject project={x} />
        </li>
      ))}
    </ul>
  </div>
);

export default WorkHistory;
