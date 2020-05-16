import React from 'react';

import LazyImage from '../lazy-image';

import styles from './styles.css';

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => (
  <div className={styles.project}>
    <a
      href={project.link}
      className={styles.imageLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LazyImage
        className={styles.image}
        src={project.image}
        alt={project.title}
      />
    </a>
    <div className={styles.description}>
      <a
        href={project.link}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{project.title}</h3>
      </a>
      <p>{project.description}</p>
    </div>
  </div>
);

export default Project;
