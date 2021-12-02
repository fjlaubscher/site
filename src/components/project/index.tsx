import React from 'react';

import LazyImage from '../lazy-image';

import styles from './project.module.scss';

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => (
  <div className={styles.project}>
    <a
      href={project.link}
      className={styles.imageLink}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
    >
      <LazyImage className={styles.image} src={project.image} alt={project.title} />
    </a>
    <div className={styles.description}>
      <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
      <p>{project.description}</p>
    </div>
  </div>
);

export default Project;
