import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
}
