import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact="true" to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
}
