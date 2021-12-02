import React from 'react';
import classnames from 'classnames';
import { useAsync } from 'react-use';

// components
import Container from '../../../components/container';
import Project from '../../../components/project';

import styles from '../home.module.scss';

const Showcase = () => {
  const { loading, value: data } = useAsync<() => Promise<ProjectType[]>>(async () => {
    const response = await fetch('/projects.json');
    return await response.json();
  });

  return (
    <Container id="showcase" className={classnames(styles.container, styles.showcase)}>
      <h2>Showcase</h2>
      {loading && <span>loading</span>}
      {!loading && data?.map((project) => <Project key={project.title} project={project} />)}
    </Container>
  );
};

export default Showcase;
