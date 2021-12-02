import React from 'react';
import { Link } from 'react-router-dom';

import styles from './nav.module.scss';

interface Props {
  onMenuItemClick?: () => void;
}

const MenuItems = ({ onMenuItemClick }: Props) => (
  <>
    <Link onClick={onMenuItemClick} className={styles.link} to="#showcase">
      Showcase
    </Link>
    <Link onClick={onMenuItemClick} className={styles.link} to="#work">
      Work
    </Link>
    <Link onClick={onMenuItemClick} className={styles.link} to="#contact">
      Contact
    </Link>
  </>
);

export default MenuItems;
