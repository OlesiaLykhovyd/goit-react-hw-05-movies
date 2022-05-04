import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import { GlobalStyle } from 'components/GlobalStyle';

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AppBar />
        <Outlet />
      </Container>
    </>
  );
}
