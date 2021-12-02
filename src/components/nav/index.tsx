import React from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaTerminal } from 'react-icons/fa';

import MenuItems from './menu-items';
import styles from './nav.module.scss';

interface Props {
  onMenuClick: () => void;
}

const Nav = ({ onMenuClick }: Props) => (
  <div className={styles.menu}>
    <Link className={styles.logo} to="/">
      <FaTerminal />
    </Link>
    <button className={styles.burger} onClick={onMenuClick}>
      <FaHamburger />
    </button>
    <div className={styles.desktopNav}>
      <MenuItems />
    </div>
  </div>
);

export default Nav;
