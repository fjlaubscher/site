import React from 'react';
import classnames from 'classnames';

import styles from './work-project.module.scss';

interface Props {
  project: Site.WorkProject;
}

const WorkProject = ({ project }: Props) => (
  <div className={styles.project}>
    <span className={styles.name}>{project.name}</span>
    <span className={styles.description}>{project.description}</span>
    <div className={styles.tags}>
      {project.tech.map((tech) => (
        <div key={tech} className={classnames(styles.badge)}>
          <span className="is-primary">{tech}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WorkProject;
