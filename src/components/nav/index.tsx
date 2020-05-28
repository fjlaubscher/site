import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { ReactComponent as BurgerIcon } from './burger.svg';
import { ReactComponent as TerminalIcon } from './terminal.svg';

import MenuItems from './menu-items';
import styles from './styles.css';

interface Props {
  onMenuClick: () => void;
}

const Nav = ({ onMenuClick }: Props) => (
  <div className={styles.menu}>
    <Link className={styles.logo} to="/">
      <TerminalIcon />
    </Link>
    <button className={styles.burger} onClick={onMenuClick}>
      <BurgerIcon />
    </button>
    <div className={styles.desktopNav}>
      <MenuItems />
    </div>
  </div>
);

export default Nav;
