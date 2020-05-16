import React from 'react';
import { Link } from 'react-router-dom';
import { FaTerminal, FaHamburger } from 'react-icons/fa';

import Container from '../container';

import MenuItems from './menu-items';
import styles from './styles.css';

interface Props {
  onMenuClick: () => void;
}

const Nav = ({ onMenuClick }: Props) => (
  <Container>
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
  </Container>
);

export default Nav;
