import React from 'react';

import styles from './project.module.scss';

interface Props {
  project: Site.ShowcaseProject;
}

const Project = ({ project }: Props) => (
  <div className={styles.project}>
    <a
      href={project.link}
      className={styles.imageLink}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
    >
      <picture className={styles.image}>
        <source srcSet={project.image.webp} type="image/webp" />
        <source srcSet={project.image.jpg} type="image/jpeg" />
        <img src={project.image.jpg} alt={project.title} />
      </picture>
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
