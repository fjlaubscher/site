import React, { useEffect, useState } from 'react';

import styles from './styles.css';

interface Props {
  className?: string;
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt, ...rest }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.src = src;
  }, []);

  return (
    (loaded && <img src={src} alt={alt} {...rest} />) || (
      <div className={styles.placeholder} />
    )
  );
};

export default LazyImage;
