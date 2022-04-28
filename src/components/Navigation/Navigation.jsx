import { NavigationLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </nav>
  );
}
