import React from 'react';

import WorkProject from '../work-project';

import styles from './styles.css';

interface Props {
  work: WorkHistoryType;
}

const WorkHistory = ({ work }: Props) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{work.employer}</h3>
    <h4 className={styles.heading}>{work.role}</h4>
    <span className={styles.location}>{work.location}</span>
    <span className={styles.dates}>
      {work.from} - {work.to || 'present'}
    </span>
    <h4 className={styles.heading}>Projects</h4>
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
