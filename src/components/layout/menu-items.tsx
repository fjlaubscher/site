import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

interface Props {
  onMenuItemClick: () => void;
}

const MenuItems = ({ onMenuItemClick }: Props) => {
  const location = useLocation();

  return (
    <>
      <Menu.Item
        onClick={onMenuItemClick}
        active={location.pathname === '/work'}
        as={Link}
        to="/work"
      >
        Work
      </Menu.Item>
      <Menu.Item
        onClick={onMenuItemClick}
        active={location.pathname === '/projects'}
        as={Link}
        to="/projects"
      >
        Projects
      </Menu.Item>
      <Menu.Item
        onClick={onMenuItemClick}
        active={location.pathname === '/contact'}
        as={Link}
        to="/contact"
      >
        Contact
      </Menu.Item>
    </>
  );
};

export default MenuItems;
