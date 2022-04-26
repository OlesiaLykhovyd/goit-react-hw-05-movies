import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails';

// import NotFoundPage from 'pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />} />

        {/* <Route element={<NotFoundPage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}
