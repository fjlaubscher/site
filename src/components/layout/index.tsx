import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Sidebar, Responsive, Icon } from 'semantic-ui-react';

import MenuItems from './menu-items';
import styles from './styles.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        visible={showSidebar}
        animation="overlay"
        direction="right"
        icon="labeled"
        inverted
        vertical
        onHide={() => setShowSidebar(false)}
      >
        <Menu.Item icon="close" onClick={() => setShowSidebar(false)} />
        <Menu.Item onClick={() => setShowSidebar(false)} as={Link} to="/">
          Home
        </Menu.Item>
        <MenuItems onMenuItemClick={() => setShowSidebar(false)} />
      </Sidebar>
      <Sidebar.Pusher>
        <Container>
          <Menu className={styles.menu} pointing secondary size="large">
            <Menu.Item as={Link} to="/">
              <Icon size="large" name="terminal" />
            </Menu.Item>

            <Responsive
              {...Responsive.onlyMobile}
              as={Menu.Item}
              onClick={() => setShowSidebar(!showSidebar)}
              position="right"
            >
              <Icon fitted size="large" name="bars" />
            </Responsive>
            <Responsive as={Menu.Menu} minWidth="768" position="right">
              <MenuItems onMenuItemClick={() => setShowSidebar(false)} />
            </Responsive>
          </Menu>
          {children}
        </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
