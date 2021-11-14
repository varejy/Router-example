import { Outlet } from '@router/outlet';
import { Container, Nav, Sidebar, Sidenav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Brand } from '@pages/layout/components/brand.component';
import { NavLink } from '@router/nav-link/navLink.component';
import { NavItem } from '@pages/layout/components/navItem.component';
function App() {
  return (
    <Container>
      <Sidebar>
        <Sidenav.Header>
          <Brand name="Complex app)" />
        </Sidenav.Header>
        <Sidenav expanded={true} appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <NavItem routeName="users" as={NavLink}>
                Users
              </NavItem>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
}

export default App;
