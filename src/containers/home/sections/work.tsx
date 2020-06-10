import React from 'react';
import classnames from 'classnames';
import { useAsync } from 'react-use';

// components
import Container from '../../../components/container';
import WorkHistory from '../../../components/work-history';

import styles from '../styles.scss';

const createKey = (item: string, item2: string) =>
  `${item.replace(/ /g, '-')}-${item2.replace(/ /g, '-')}`;

const Work = () => {
  const { loading, value: data } = useAsync<() => Promise<WorkHistoryType[]>>(
    async () => {
      const response = await fetch('/work.json');
      const result = await response.json();
      return result;
    }
  );

  return (
    <Container
      id="work"
      alternate
      className={classnames(styles.container, styles.work)}
    >
      <h2>Work History</h2>
      {loading && <span>loading</span>}
      {!loading &&
        data?.map((work) => (
          <WorkHistory key={createKey(work.employer, work.role)} work={work} />
        ))}
    </Container>
  );
};

export default Work;
