import React from 'react';
import classnames from 'classnames';
import { useLocation, Link } from 'react-router-dom';

import styles from './styles.css';

interface Props {
  onMenuItemClick?: () => void;
}

const MenuItems = ({ onMenuItemClick }: Props) => {
  const location = useLocation();

  return (
    <>
      <Link
        onClick={onMenuItemClick}
        className={classnames(
          styles.link,
          location.pathname === '/work' && styles.active
        )}
        to="/work"
      >
        Work
      </Link>
      <Link
        onClick={onMenuItemClick}
        className={classnames(
          styles.link,
          location.pathname === '/projects' && styles.active
        )}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        onClick={onMenuItemClick}
        className={classnames(
          styles.link,
          location.pathname === '/contact' && styles.active
        )}
        to="/contact"
      >
        Contact
      </Link>
    </>
  );
};

export default MenuItems;
