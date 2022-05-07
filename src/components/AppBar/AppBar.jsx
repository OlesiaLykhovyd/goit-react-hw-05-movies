import { NavigationLink } from './App.styled';

export default function AppBar() {
  return (
    <header>
      <nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </nav>
    </header>
  );
}
