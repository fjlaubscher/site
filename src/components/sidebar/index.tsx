import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useClickAway } from 'react-use';

import { ReactComponent as CloseIcon } from './close.svg';

// components
import MenuItems from '../nav/menu-items';

import styles from './styles.css';

interface Props {
  visible: boolean;
  onCloseClick: () => void;
}

const Sidebar = ({ visible, onCloseClick }: Props) => {
  const ref = useRef(null);
  useClickAway(ref, onCloseClick);

  return (
    <nav
      ref={ref}
      className={classnames(styles.sidebar, visible && styles.visible)}
    >
      <button className={styles.close} onClick={onCloseClick}>
        <CloseIcon />
      </button>
      <Link onClick={onCloseClick} to="/">
        Home
      </Link>
      <MenuItems onMenuItemClick={onCloseClick} />
    </nav>
  );
};

export default Sidebar;
