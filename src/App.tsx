import { Container, Nav, Sidebar, Sidenav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Brand } from '@pages/layout/components/brand.component';
import { NavLink } from '@router/nav-link/navLink.component';
import { NavItem } from '@pages/layout/components/navItem.component';
import { MainOutlet } from '@router/mainOutlet';
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
              <NavItem routeName="one" as={NavLink}>
                First doll
              </NavItem>
              <NavItem routeName="one.second" as={NavLink}>
                Second doll
              </NavItem>
              <NavItem routeName="one.second.third" as={NavLink}>
                Third doll
              </NavItem>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
      <Container>
        <MainOutlet />
      </Container>
    </Container>
  );
}

export default App;
